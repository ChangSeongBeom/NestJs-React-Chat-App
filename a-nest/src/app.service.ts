import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return process.env.SECRET;
  }

  getGet(){
    return process.env.SECRET;
  }
}
