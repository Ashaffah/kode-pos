import { FastifyRequest, FastifyReply } from "fastify";
import prisma from "../configs/prisma";

export const getAllProvinces = async (
  req: FastifyRequest,
  res: FastifyReply
) => {
  try {
    const provinces = await prisma.provinces.findMany();
    res.status(200).send(provinces);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

export const getAllCities = async (req: FastifyRequest, res: FastifyReply) => {
  const { id } = req.params as any;
  try {
    const cities = await prisma.cities.findMany({
      where: { provinceId: parseInt(id) },
    });
    res.status(200).send(cities);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

export const getAllDistricts = async (
  req: FastifyRequest,
  res: FastifyReply
) => {
  const { id } = req.params as any;
  try {
    const districts = await prisma.districts.findMany({
      where: { cityId: parseInt(id) },
    });
    res.status(200).send(districts);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

export const getAllSubDistricts = async (
  req: FastifyRequest,
  res: FastifyReply
) => {
  const { id } = req.params as any;
  // const { _page, _limit, _sort, _order } = req.query as any;
  // const limit = +(_limit ?? 10); // per_page
  // const offset = (+(_page ?? 1) - 1) * limit; // offset
  // const sort = (_sort ?? "id").toString(); // column
  // const order = _order ?? "asc"; // asc atau desc
  // const orderBy = { [sort]: order };
  try {
    const subDistricts = await prisma.subdistricts.findMany({
      where: { districtId: parseInt(id) },
      // orderBy,
      // skip: offset,
      // take: limit,
      include: { Pivot: true },
    });
    res.status(200).send(subDistricts);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

export const getCodePos = async (req: FastifyRequest, res: FastifyReply) => {
  const { id } = req.params as any;
  const { _page, _limit, _sort, _order } = req.query as any;
  const limit = +(_limit ?? 10); // per_page
  const offset = (+(_page ?? 1) - 1) * limit; // offset
  const sort = (_sort ?? "id").toString(); // column
  const order = _order ?? "asc"; // asc atau desc
  const orderBy = { [sort]: order };
  try {
    const countPos = await prisma.pivot.count({ where: { postal: id } });
    const codePos = await prisma.pivot.findMany({
      where: { postal: id },
      orderBy,
      skip: offset,
      take: limit,
      include: {
        Subdistricts: true,
        Districts: true,
        Cities: true,
        Provinces: true,
      },
    });
    res.status(200).send({
      data: codePos,
      per_page: limit,
      page: +(_page ?? 1),
      total_data: countPos,
      message: "Success get all data!",
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};
