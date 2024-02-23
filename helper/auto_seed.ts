import prisma from "../configs/prisma";
import { FileImportAll, FileImport } from "./helper";

//Auto Seed the database
// export const AutoSeed = () => {
//   FileImportAll(
//     "./helper/CSV/",
//     (filename: string, content) => {
//       // console.log(filename);
//       // console.log(content);
//       if (filename === "province.csv") {
//         let myarray = content.split("\n").filter((n) => n);
//         // console.log(content);
//         let result = [];
//         for (let i = 0; i < myarray.length; i++) {
//           let obj: { id: string; val: string } = { id: "", val: "" };
//           // obj.id = myarray[i % myarray.length];
//           // obj.val = myarray[i].value;
//           obj.id = myarray[i].split(",")[0];
//           obj.val = myarray[i].split(",")[1];
//           result.push(obj);
//         }
//         // console.log(result);
//         result.forEach(async (element) => {
//           await prisma.provinces.createMany({
//             data: [
//               {
//                 name: element.val,
//               },
//             ],
//           });
//         });
//       } else if (filename === "city.csv") {
//         let myarray = content.split("\n").filter((n) => n);
//         // console.log(myarray);
//         let result = [];
//         for (let i = 0; i < myarray.length; i++) {
//           let obj: { id: string; val: string; provinceId: string } = {
//             id: "",
//             val: "",
//             provinceId: "",
//           };
//           // obj.id = myarray[i % myarray.length];
//           // obj.val = myarray[i].value;
//           obj.id = myarray[i].split(",")[0];
//           obj.val = myarray[i].split(",")[1];
//           obj.provinceId = myarray[i].split(",")[2];
//           result.push(obj);
//         }
//         // console.log(result);
//         result.forEach(async (element) => {
//           await prisma.cities.createMany({
//             data: [
//               {
//                 name: element.val,
//                 provinceId: parseInt(element.provinceId),
//               },
//             ],
//           });
//         });
//       } else if (filename === "district.csv") {
//         let myarray = content.split("\n").filter((n) => n);
//         // console.log(myarray);
//         let result = [];
//         for (let i = 0; i < myarray.length; i++) {
//           let obj: { id: string; val: string; cityId: string } = {
//             id: "",
//             val: "",
//             cityId: "",
//           };
//           // obj.id = myarray[i % myarray.length];
//           // obj.val = myarray[i].value;
//           obj.id = myarray[i].split(",")[0];
//           obj.val = myarray[i].split(",")[1];
//           obj.cityId = myarray[i].split(",")[2];
//           result.push(obj);
//         }
//         // console.log(result);
//         result.forEach(async (element) => {
//           await prisma.districts.createMany({
//             data: [
//               {
//                 name: element.val,
//                 cityId: parseInt(element.cityId),
//               },
//             ],
//           });
//         });
//       } else if (filename === "subdistrict.csv") {
//         let myarray = content.split("\n").filter((n) => n);
//         // console.log(myarray);
//         let result = [];
//         for (let i = 0; i < myarray.length; i++) {
//           let obj: { id: string; val: string; districtId: string } = {
//             id: "",
//             val: "",
//             districtId: "",
//           };
//           // obj.id = myarray[i % myarray.length];
//           // obj.val = myarray[i].value;
//           obj.id = myarray[i].split(",")[0];
//           obj.val = myarray[i].split(",")[1];
//           obj.districtId = myarray[i].split(",")[2];
//           result.push(obj);
//         }
//         // console.log(result);
//         result.forEach(async (element) => {
//           await prisma.subdistricts.createMany({
//             data: [
//               {
//                 name: element.val,
//                 districtId: parseInt(element.districtId),
//               },
//             ],
//           });
//         });
//       } else if (filename === "postal_code.csv") {
//         let myarray = content.split("\n").filter((n) => n);
//         // console.log(myarray);
//         let result = [];
//         for (let i = 0; i < myarray.length; i++) {
//           // postal_id,subdis_id,dis_id,city_id,prov_id,postal_code
//           let obj: {
//             id: string;
//             subDistrictId: string;
//             districtId: string;
//             cityId: string;
//             provinceId: string;
//             postal: string;
//           } = {
//             id: "",
//             subDistrictId: "",
//             districtId: "",
//             cityId: "",
//             provinceId: "",
//             postal: "",
//           };
//           // obj.id = myarray[i % myarray.length];
//           // obj.val = myarray[i].value;
//           obj.id = myarray[i].split(",")[0];
//           obj.subDistrictId = myarray[i].split(",")[1];
//           obj.districtId = myarray[i].split(",")[2];
//           obj.cityId = myarray[i].split(",")[3];
//           obj.provinceId = myarray[i].split(",")[4];
//           obj.postal = myarray[i].split(",")[5];
//           result.push(obj);
//         }
//         // console.log(result);
//         result.forEach(async (element) => {
//           await prisma.pivot.createMany({
//             data: [
//               {
//                 provinceId: parseInt(element.provinceId),
//                 cityId: parseInt(element.cityId),
//                 districtId: parseInt(element.districtId),
//                 subdistrictId: parseInt(element.subDistrictId),
//                 postal: element.postal,
//               },
//             ],
//           });
//         });
//       }
//     },
//     function (err) {
//       throw err;
//     }
//   );
// };

// Manual Seed the database
export const cmdSeeder = (filePath: string) => {
  FileImport(
    filePath,
    (filename: string, content) => {
      if (filename === "./helper/CSV/province.csv") {
        let myarray = content.split("\n").filter((n) => n);
        // console.log(content);
        let result = [];
        for (let i = 0; i < myarray.length; i++) {
          let obj: { id: string; val: string } = { id: "", val: "" };
          // obj.id = myarray[i % myarray.length];
          // obj.val = myarray[i].value;
          obj.id = myarray[i].split(",")[0];
          obj.val = myarray[i].split(",")[1];
          result.push(obj);
        }
        // console.log(result);
        result.forEach(async (element) => {
          await prisma.provinces.createMany({
            data: [
              {
                id: parseInt(element.id),
                name: element.val,
              },
            ],
          });
        });
      } else if (filename === "./helper/CSV/city.csv") {
        let myarray = content.split("\n").filter((n) => n);
        // console.log(myarray);
        let result = [];
        for (let i = 0; i < myarray.length; i++) {
          let obj: { id: string; val: string; provinceId: string } = {
            id: "",
            val: "",
            provinceId: "",
          };
          // obj.id = myarray[i % myarray.length];
          // obj.val = myarray[i].value;
          obj.id = myarray[i].split(",")[0];
          obj.val = myarray[i].split(",")[1];
          obj.provinceId = myarray[i].split(",")[2];
          result.push(obj);
        }
        // console.log(result);
        result.forEach(async (element) => {
          await prisma.cities.createMany({
            data: [
              {
                id: parseInt(element.id),
                name: element.val,
                provinceId: parseInt(element.provinceId),
              },
            ],
          });
        });
      } else if (filename === "./helper/CSV/district.csv") {
        let myarray = content.split("\n").filter((n) => n);
        // console.log(myarray);
        let result = [];
        for (let i = 0; i < myarray.length; i++) {
          let obj: { id: string; val: string; cityId: string } = {
            id: "",
            val: "",
            cityId: "",
          };
          // obj.id = myarray[i % myarray.length];
          // obj.val = myarray[i].value;
          obj.id = myarray[i].split(",")[0];
          obj.val = myarray[i].split(",")[1];
          obj.cityId = myarray[i].split(",")[2];
          result.push(obj);
        }
        // console.log(result);
        result.forEach(async (element) => {
          await prisma.districts.createMany({
            data: [
              {
                id: parseInt(element.id),
                name: element.val,
                cityId: parseInt(element.cityId),
              },
            ],
          });
        });
      } else if (filename === "./helper/CSV/subdistrict.csv") {
        let myarray = content.split("\n").filter((n) => n);
        // console.log(myarray);
        let result = [];
        for (let i = 0; i < myarray.length; i++) {
          let obj: { id: string; val: string; districtId: string } = {
            id: "",
            val: "",
            districtId: "",
          };
          // obj.id = myarray[i % myarray.length];
          // obj.val = myarray[i].value;
          obj.id = myarray[i].split(",")[0];
          obj.val = myarray[i].split(",")[1];
          obj.districtId = myarray[i].split(",")[2];
          result.push(obj);
        }
        // console.log(result);
        result.forEach(async (element) => {
          await prisma.subdistricts.createMany({
            data: [
              {
                id: parseInt(element.id),
                name: element.val,
                districtId: parseInt(element.districtId),
              },
            ],
          });
        });
      } else if (filename === "./helper/CSV/postal_code.csv") {
        let myarray = content.split("\n").filter((n) => n);
        // console.log(myarray);
        let result = [];
        for (let i = 0; i < myarray.length; i++) {
          // postal_id,subdis_id,dis_id,city_id,prov_id,postal_code
          let obj: {
            id: string;
            subDistrictId: string;
            districtId: string;
            cityId: string;
            provinceId: string;
            postal: string;
          } = {
            id: "",
            subDistrictId: "",
            districtId: "",
            cityId: "",
            provinceId: "",
            postal: "",
          };
          // obj.id = myarray[i % myarray.length];
          // obj.val = myarray[i].value;
          obj.id = myarray[i].split(",")[0];
          obj.subDistrictId = myarray[i].split(",")[1];
          obj.districtId = myarray[i].split(",")[2];
          obj.cityId = myarray[i].split(",")[3];
          obj.provinceId = myarray[i].split(",")[4];
          obj.postal = myarray[i].split(",")[5];
          result.push(obj);
        }
        // console.log(result);
        result.forEach(async (element) => {
          await prisma.pivot.createMany({
            data: [
              {
                id: parseInt(element.id),
                provinceId: parseInt(element.provinceId),
                cityId: parseInt(element.cityId),
                districtId: parseInt(element.districtId),
                subdistrictId: parseInt(element.subDistrictId),
                postal: element.postal,
              },
            ],
          });
        });
      }
    },
    function (err) {
      throw err;
    }
  );
};
