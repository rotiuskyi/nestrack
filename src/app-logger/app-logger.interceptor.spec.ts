import { AppLoggerInterceptor } from "./app-logger.interceptor";

describe("AppLoggerInterceptor", () => {
  it("should be defined", () => {
    expect(new AppLoggerInterceptor()).toBeDefined();
  });
});
