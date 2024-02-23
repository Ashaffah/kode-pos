run	:
	@npm run build
	@cp ./.env ./temp/.env
	@npm run start

migrate	:
	npx prisma migrate dev --schema prisma/schema.prisma

install	:
	npm install

db :
	npx prisma db push --schema prisma/schema.prisma

bun	:
	bun i
