import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song.dto';

@Controller('songs') // Base routing path prefix:
// http://localhost:3000/songs
export class SongsController {
  // Depdency Injection happens here through the constructor parameter `type hints`

  constructor(private readonly songsService: SongsService) {}

  @Get() // GET /songs
  findAll() {
    return this.songsService.findAll();
  }

  @Get(':id') // GET /songs/:id (Dynamic parameters)
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }), // Overrides the default 400 with a custom 406 error code if conversion fails
    )
    id: number,
  ) {
    return `Parsed type validation verified. Dynamic routing element numeric instance: ${id} (Type: ${typeof id})`;
  }

  @Post() // POST /songs
  create(@Body() createSongDto: CreateSongDto) {
    // The request body has now passed validation and safely matches our data contract
    return this.songsService.create(createSongDto.title);
  }

  @Put(':id') // PUT /songs/:id
  update(@Param('id') id: string) {
    return `This action performs a structural update on a song record matching ID: ${id}`;
  }

  @Delete(':id') // DELETE /songs/:id
  delete(@Param('id') id: string) {
    return `This action safely purges the targeted song record matching ID: ${id}`;
  }
}
