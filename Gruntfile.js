module.exports = function(grunt){
    //初始化grunt 配置
    grunt.initConfig({
 
        //获取package.json的信息
        pkg: grunt.file.readJSON('package.json'),
        //concat插件的配置信息
        // ====================================================================================================================        
        concat: {
            options:{
                stripBanners:true, //合并时允许输出头部信息
                banner:'/*!<%= pkg.name %> - <%= pkg.version %>-'+'<%=grunt.template.today("yyyy-mm-dd") %> */'
            },
            cssConcat:{
                src:['src/css/*.css'],
                dest:'dist/css/<%= pkg.name %> - <%= pkg.version %>.css' //dest 是目的地输出
            },
            jsConcat:{
                src:'src/js/*.js',
                dest:'dist/js/<%=pkg.name %> - <%= pkg.version %>.js'
            }
        },
        // ==================================================clean==================================================================      

        clean: {
            build: {
                src: [ 'dist' ]
            },
        },
        // ==================================================copy==================================================================        
        copy: {
            build:{
                cwd: 'src/img',
                src: [ '**' ],
                dest: 'dist/img',
                expand: true 
            },
        },
        // ==================================================stylus==================================================================                
        stylus:{
            build: {
                options: {
                    linenos: false,
                    compress: true
                },
                files: [{
                    'dist/css/index.css': ['src/css/*.styl']
                }]
            }
        },
        // ==================================================autoprefixer==============bufg====================================================
        autoprefixer: {
            build: {
                expand: true,
                cwd: 'build',
                src: [ 'src/css/*.css' ],
                dest: 'dist/css'
            }
        },
        // ==================================================cssmin==================================================================
        //压缩css
        cssmin:{
            options:{
                stripBanners:true, //合并时允许输出头部信息
                banner:'/*!<%= pkg.name %> - <%= pkg.version %>-'+'<%=grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build:{
                src:'dist/css/<%=pkg.name %> - <%=pkg.version %>.css',//压缩是要压缩合并了的
                dest:'dist/css/<%= pkg.name %> - <%= pkg.version %>.min.css' //dest 是目的地输出
            }
        },
        // ====================================================jsmin================================================================        
        //压缩js
        uglify:{
            options:{
                stripBanners:true, //合并时允许输出头部信息
                banner:'/*!<%= pkg.name %> - <%= pkg.version %>-'+'<%=grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build:{
                src:'dist/js/<%=pkg.name %> - <%=pkg.version %>.js',//压缩是要压缩合并了的
                dest:'dist/js/<%= pkg.name %> - <%= pkg.version %>.min.js' //dest 是目的地输出
            }
        },
        // ====================================================jshint================================================================        
        //JS语法检测
        jshint:{
            options:{
                jshintrc:'.jshint'
            },
            build:['src/js/*.js']
        },
        // ======================================================csslint==============================================================        
        //css检测
        csslint:{
            options:{
                csslintrc:'.csslint'
            },
            build:['src/css/*.css']
 
        },
        // ========================================================watch============================================================        
        //watch自动化
        watch:{
            build:{
                files:['src/js/*.js','src/css/*.css'],
                tasks:['jshint','csslint','concat','cssmin','uglify'],
                options:{spawn:false}
            }
        },
        // ========================================================serve============================================================        
        connect: {
            server: {
                options: {
                    protocol: 'http',
                    port: 80,
                    hostname: '*',
                    keepalive: true,//保持服务器的持续执行 需要注意的是，如果有一个服务器的 keepalive 设置为 true，就会阻塞其它的服务器。
                    base: ['src/']
                }
            },
             server2: {
                options: {
                    protocol: 'http',
                    port: 1987,
                    hostname: '*',
                    keepalive: true,//保持服务器的持续执行
                    base: ['src/img']
                }
            }
        },
 
    });

    // ====================================================================================================================    

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-connect');

    //告诉grunt我们将使用插件
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //告诉grunt当我们在终端输入grunt时需要做些什么
    grunt.registerInitTask('default',['jshint','csslint','concat','cssmin','uglify','watch']);//先进行语法检查，如果没有问题，再合并，再压缩

};