
var gulp = require('gulp'); // appel du module gulp
var browserSync = require ('browser-sync'); //appel de browserSync
var minifyCss = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
var notify = require("gulp-notify");
const autoprefixer = require('gulp-autoprefixer');
var sass = require ( 'gulp-sass');
var uglify = require('gulp-uglify');
var concat = require("gulp-concat");
const size = require('gulp-size');
var uncss = require('gulp-uncss');
var sourcemaps = require('gulp-sourcemaps');
// rafraÃ®chissement du browser
var reload      = browserSync.reload;

gulp.task('default', function() {
  console.log('Ma tÃ¢che par dÃ©faut...')
});

gulp.task('browser-sync', function() {
  browserSync({
    port: 3000,
    server: {
      baseDir: "./", //base directory
      index: "index.html" //fichier Ã  charger par dÃ©faut
    }
  });
});

// crÃ©e une tÃ¢che css
gulp.task('css', function() {
  console.log('Ma tÃ¢che css...')
  //gulp.src -> cherche un ou plusieurs fichiers sources Ã  minifier
  return gulp.src(['./css/style.css', './css/contact.css']) // src = source de fichiers
  .pipe(sourcemaps.init())
  // .pipe(uncss({
  //         html: ['index.html']
  //     }))
  .pipe(size())
  // .pipe(autoprefixer())
  .pipe(minifyCss()) // compresser ma css par le module gulp-minify-css
  .pipe(concat('bundle.css'))//concatÃ©nation en 1 fichier

  .pipe(reload({stream: true, once:true})) // je rafraÃ®chis mon navigateur quand ma tÃ¢che css est accomplie
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('dist/css/')) // permet d'envoyer le fichier minifiÃ© dans le rÃ©pertoire de destination dist/css
  .pipe(notify('css-compressÃ©e et concatÃ©nÃ©e'));


});

gulp.task('js', function() {
  console.log('Ma tÃ¢che js...')
  return gulp.src(['js/*js']) // src = source de fichier
  .pipe(concat('app.min.js'))//concatÃ©nation en 1 fichier
  // .pipe(uglify())
  .pipe(gulp.dest('dist/js/')) // permet d'envoyer le fichier minifiÃ© dans le rÃ©pertoire de destination dist/css
  .pipe(notify('js-modifiÃ©'))

  .pipe(reload({stream: true, once:true})); // je rafraÃ®chis mon navigateur quand ma tÃ¢che css est accomplie
});



//je crÃ©e une tÄ‰he default
//Au lancement par default, la tÃ¢che browser-sync va se lancer
gulp.task('default', ['browser-sync','css','js'], function() {
  gulp.watch('./js/*.js',['js']);
  gulp.watch('./css/*.css', ['css']); // watch permet de "watcher", observer les changements de fichiers CSS du
  gulp.watch('./sass/**/*.scss', ['sass']);
  // dossier CSS et relncer la tÃ¢che "css"
  console.log('Ma tÃ¢che par dÃ©faut...')
});


//je crÃ©e une tache sass
gulp.task('sass', function() {
  console.log('Ma tÃ¢che sass...')
  //gulp.src -> cherche un ou plusieurs fichiers sources Ã  minifier
  return gulp.src(['sass/main.scss']) // src = source de fichiers
  .pipe(sass().on('error', sass.logError))
  // .pipe(autoprefixer())
  .pipe(sourcemaps.init())

  .pipe(minifyCss()) // compresser ma css par le module gulp-minify-css
  .pipe(concat('bundle-sass.css'))//concatÃ©nation en 1 fichier

  .pipe(gulp.dest('dist/css/')) // permet d'envoyer le fichier minifiÃ© dans le rÃ©pertoire de destination dist/css
  .pipe(notify('sass-compilÃ© compressÃ©e et concatÃ©nÃ©e'))
  .pipe(reload({stream: true, once:true})); // je rafraÃ®chis mon navigateur quand ma tÃ¢che css est accomplie
});
