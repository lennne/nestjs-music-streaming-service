import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('songs') // Base routing path prefix:
// http://localhost:3000/songs
export class SongsController {
  @Get() // GET /songs
  findAll() {
    return 'This action fetches all available songs across the catalog';
  }

  @Get(':id') // GET /songs/:id (Dynamic parameters)
  findOne(@Param('id') id: string) {
    return `This action retrieves a single record matching ID: ${id}`;
  }

  @Post() // POST /songs
  create() {
    return 'This action pushes a newly formulated song record down into the catalog tier.';
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
