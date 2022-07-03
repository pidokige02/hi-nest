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

    @Get()
    getAll() {
        return this.moviesService.getAll();
    }

    @Get('search')
    search(@Query('year') seachingYear: string) {
        return `We are searching for a movie made after: ${seachingYear}`;
    }

    @Get("/:id")
    getOne(@Param("id") movieId:string) : Movie {
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData) {
        return this.moviesService.create(movieData);
    }

    @Delete("/:id")
    remove(@Param("id") movieId:string) {
        return this.moviesService.deleteOne(movieId);
    }

    @Patch(':id')
    patch(@Param('id') movieId: string, @Body() updateData) {
        return {
        updatedMovie: movieId,
        ...updateData,
        };
    }
}