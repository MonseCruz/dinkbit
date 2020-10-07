const gulp = require ('gulp')
sass = require ('gulp-sass')
autoprefixer = require ('gulp-autoprefixer')

gulp.task('sass',()=>
    gulp.src('../SASS/*.scss')
    .pipe(sass({
        outputStyle:'expanded',
        SourceComments:true
    }))
    .pipe(gulp.dest('../CSS'))
    .pipe(autoprefixer({
        versions:['last 2 browsers']
    }))
)

gulp.task('default', ()=>{
    gulp.watch('../SASS/*.scss',['sass'])
})
