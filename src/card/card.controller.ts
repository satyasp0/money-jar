import { Controller, Get } from '@nestjs/common';
import { Card } from '../model/entity/card.entity';
import { CardService } from './card.service';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get()
  async getAllCards(): Promise<Card[]> {
    const result: Card[] = await this.cardService.findAll();
    return result.length > 0 ? result : [];
  }
}
