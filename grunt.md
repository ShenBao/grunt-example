

grunt-contrib-clean：删除文件。
* grunt-contrib-compass：使用compass编译sass文件。
* grunt-contrib-concat：合并文件。
* grunt-contrib-copy：复制文件。
* grunt-contrib-cssmin：压缩以及合并CSS文件。
* grunt-contrib-imagemin：图像压缩模块。
* grunt-contrib-jshint：检查JavaScript语法。
* grunt-contrib-uglify：压缩以及合并JavaScript文件。
* grunt-contrib-watch：监视文件变动，做出相应动作。








grunt connect
    protocol 服务协议，可以是 'http' 或者 'https', 如果使用 https ，需要额外配置服务器证书。
    port 服务器的端口，默认为 8000
    base 可以是一个字符串，或者一个数组，或者一个对象，用来表示映射到网站虚拟根目录的目标。
    字符串，映射到网站虚拟根目录的物理路径，默认为 Gruntfile.js 所在的目录
    数组，多个被映射到网站虚拟根目录的物理路径
    对象，每个路径可以配置更加详细的选项，可以通过 { path: xxx, options: xxxx} 进行配置，其中 options 会传递给 serve-state 模块处理。
    hostname 默认为 '0.0.0.0'，表示可以从任何网络地址来访问。
    keepalive 是否保持服务，不会退出服务

