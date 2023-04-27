const deviceDetector = {
  install(app) {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isTablet = /iPad|Android/i.test(navigator.userAgent) && !/Mobile/i.test(navigator.userAgent);
    const isDesktop = !isMobile && !isTablet;

    app.config.globalProperties.$device = {
      isMobile,
      isTablet,
      isDesktop,
    };
  },
};

export default deviceDetector;