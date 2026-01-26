import {src, dest, watch, series } from 'gulp'
import concat from "gulp-concat";
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'




const sass = gulpSass(dartSass)


export function js(done){

     src('src/js/**/*.js')         
    .pipe(concat('app.js'))    
    .pipe(dest('build/js'))

    done()
}

export function css(done){
    src('src/sass/app.scss', {sourcemaps: true})
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dist/css'))

    done()
}




export function dev(){
    watch('src/sass/**/*.scss', css)
    watch('src/js/**/*.js', js)


}


export default series(js, css, dev)