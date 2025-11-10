import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get()
  getInfo() {
    return {
      name: "Nestrack",
      version: 1,
      description: "Issue-Tracking API",
    };
  }
}
