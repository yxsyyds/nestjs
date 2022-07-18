import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = gmmailextinfos & Document;

@Schema()
export class gmmailextinfos extends Document {
  @Prop({ required: true })
  name: string;
  @Prop()
  id: number;
}

export const GmmailextinfoSchema = SchemaFactory.createForClass(gmmailextinfos);
