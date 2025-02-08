import circle from '@/assets/images/pattern-circle.svg';
import squigglyLineTop from '@/assets/images/pattern-squiggly-line-top.svg';
import squigglyLineBottomDesktop from '@/assets/images/pattern-squiggly-line-bottom-desktop.svg';
import squigglyLineBottomMobileTablet from '@/assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg';

const Background = () => {
  return (
    <div className="bg overflow-hidden absolute inset-0 z-[-1] w-full h-full pointer-events-none select-none">
      <img
        className="absolute z-10 h-36 -right-16 top-[65vh] lg:right-[22vw] lg:top-[40vh] lg:h-64"
        src={circle}
        alt=""
      />

      <img className="absolute left-[5vw] -top-[10vh] z-10 h-64" src={circle} alt="" />

      <img
        className="absolute right-0 top-8 lg:top-16 z-10 h-16 lg:h-64"
        src={squigglyLineTop}
        alt=""
      />

      <img
        className="absolute left-0 bottom-0 z-10 h-64 hidden lg:block"
        src={squigglyLineBottomDesktop}
        alt=""
      />

      <img
        className="absolute left-0 bottom-0 z-10 h-64 lg:hidden"
        src={squigglyLineBottomMobileTablet}
        alt=""
      />
    </div>
  );
};

export default Background;
