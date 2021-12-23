import { IsEnum, IsOptional, IsString } from "class-validator";
import { RegStatus } from "../reg-status.enum";

export class GetRegFilterDto {

    @IsOptional()
    @IsEnum(RegStatus)
    Status?: string;
  
    
}
