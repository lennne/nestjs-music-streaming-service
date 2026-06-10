import { Injectable } from '@nestjs/common';

@Injectable() // Marks this class as an object the Nest DI(Dependency Injection) container can instantiate and manage
export class SongsService {
  // In-memory data store array mapping pseudo persistent states
  private readonly songs: string[] = [];

  create(song: string) {
    this.songs.push(song);
    return {
      message: 'Song element successfully inserted into local state store.',
      payload: song,
    };
  }

  findAll() {
    return this.songs;
  }
}
