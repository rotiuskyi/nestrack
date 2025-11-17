import { Options, PostgreSqlDriver } from "@mikro-orm/postgresql";
import { TsMorphMetadataProvider } from "@mikro-orm/reflection";
import { ConfigService } from "@nestjs/config";

export default (configService: ConfigService): Options => ({
  driver: PostgreSqlDriver,
  dbName: "nestrack_db",
  port: 5432,
  host: "localhost",
  user: configService.get<string>("nestrack_db.user"),
  password: configService.get<string>("nestrack_db.pass"),
  entities: ["dist/**/*.entity.js"],
  entitiesTs: ["src/**/*.entity.ts"],
  metadataProvider: TsMorphMetadataProvider,
  debug: true,
});
