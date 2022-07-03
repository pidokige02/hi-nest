import {
    Controller,
    Get,
    Param,
    Post,
    Delete,
    Patch,
    Body,
    Query,
  } from '@nestjs/common';

import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';

@Controller('movies') // it's the base url
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}
    // get http://localhost:3000/movies/
    @Get()
    getAll() {
        return this.moviesService.getAll();
    }

    @Get('search')
    search(@Query('year') seachingYear: string) {
        return `We are searching for a movie made after: ${seachingYear}`;
    }
    // get http://localhost:3000/movies/1
    @Get(":id")
    getOne(@Param("id") movieId:string) : Movie {
        return this.moviesService.getOne(movieId);
    }
    // POST: http://localhost:3000/movies/
    // {
    //     "title" : "Waiting for me",
    //     "year" : 2020,
    //     "genres" : ["action", "mind blown"]
    // }
    @Post()
    create(@Body() movieData) {
        return this.moviesService.create(movieData);
    }

    @Delete(":id")
    remove(@Param("id") movieId:string) {
        return this.moviesService.deleteOne(movieId);
    }
    // http://localhost:3000/movies/1
    // {
    //     "year": 2022,
    // }
    @Patch(':id')
    patch(@Param('id') movieId: string, @Body() updateData) {
        return this.moviesService.update(movieId, updateData);
    }
}
