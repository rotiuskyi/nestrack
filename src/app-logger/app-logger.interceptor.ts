import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  Logger,
} from "@nestjs/common";
import { Observable, tap } from "rxjs";
import { Request } from "express";

@Injectable()
export class AppLoggerInterceptor implements NestInterceptor {
  private readonly logger = new Logger(AppLoggerInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest<Request>();
    const { ip, method, path } = req;

    const startTime = Date.now();
    return next.handle().pipe(
      tap((resBody) => {
        const now = Date.now();
        const timeSpent = now - startTime;
        this.logger.log(
          `${method} ${path} request from IP ${ip} took ${timeSpent}ms returning:`,
        );
        console.log(resBody);
      }),
    );
  }
}
