import { DynamicModule, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaModuleOptions } from './interfaces/prisma-module-options.interface';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {
  public static forRoot(options: PrismaModuleOptions = {}): DynamicModule {
    return {
      global: options.isGlobal,
      module: PrismaModule,
    };
  }
}
