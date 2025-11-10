import { Test, TestingModule } from "@nestjs/testing";
import { ConfigService } from "@nestjs/config";
import { AppModule } from "./app.module";

describe("AppModule", () => {
  let configService: ConfigService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    configService = app.get<ConfigService>(ConfigService);
  });

  it("should read APP_NAME env variable", () => {
    expect(configService.get("APP_NAME")).toBe("Nestrack");
  });

  it("should read nestrack_db_user", () => {
    expect(configService.get("nestrack_db.user")).toBeTruthy();
  });

  it("should read nestrack_db_pass", () => {
    expect(configService.get("nestrack_db.pass")).toBeTruthy();
  });
});
