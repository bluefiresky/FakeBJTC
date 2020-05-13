import { palette } from "./palette"
import { gradient } from "./gradient"

/**
 * Roles for colors.  Prefer using these over the palette.  It makes it easier
 * to change things.
 *
 * The only roles we need to place in here are the ones that span through the app.
 *
 * If you have a specific use-case, like a spinner color.  It makes more sense to
 * put that in the <Spinner /> component.
 */
export const color = {
  /** 项目主色调 **/
  mainColor: gradient.mainColor,
  buttonBg: gradient.button,
  /** 项目辅色 **/
  C1: palette.whiteYellow,
  C2: palette.whiteGrey,
  C3: palette.whiteBrown,
  C4: palette.pinkRed,
  C5: palette.black3,
  C6: palette.grey6,
  C7: palette.grey9,
  C8: palette.white,
  C9: palette.darkSkyBlue,
  C10: palette.black,
  C63: '#636363',
  /**主题色黄色**/
  bgColor:'#FFDD00',
  /** App背景色 **/
  page: palette.darkBgGrey,
  /** 项目分割线颜色 **/
  separator: palette.lightestGrey,
  /** 浅色App背景色 **/
  lightPage: palette.lightBlueGrey,
  /**
   * The palette is available to use, but prefer using the name.
   */
  palette,

  /**
   * The gradients are available too.
   */
  gradient,

  /**
   * A helper for making something see-thru. Use sparingly as many layers of transparency
   * can cause older Android devices to slow down due to the excessive compositing required
   * by their under-powered GPUs.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * A translucent overlay
   */
  translucent: "rgba(0,0,0, 0.15)",
  /**
   * A white translucent overlay
   */
  translucentWhite: "rgba(255,255,255, 0.25)",
  /**
   * A darker translucent overlay
   */
  darkTranslucent: "rgba(0,0,0, 0.30)",
  /**
   * The screen background.
   */
  backgroundWhite: palette.white,
  /**
   * The screen background.
   */
  background: palette.white,
  /**
   * A background for panels.
   */
  panelBackground: palette.offWhite,
  /**
   * The main tinting color.
   */
  primary: '#FFDD00',
  /**
   * The main tinting color, but darker.
   */
  primaryDarker: palette.orangeDarker,
  /**
   * A subtle color used for borders and lines.
   */
  line: '#CCCCCC',
  /**
   * A subtle color used for borders and lines.
   */
  lightLine:'#F2F2F2',
  /**
   * 同XStyle中的commonLine 和 absoluteLine.
   */
  commonLine:'#F4F3F6',
  /**
   * The default color of text in many components.
   */
  text: palette.offBlack,
  /**
   * Secondary information.
   */
  dim: palette.lightGrey,
  /**
   * Error messages and icons.
   */
  error: palette.angry,
  /**
   * The sky color
   */
  skyBlue: 'lightskyblue',
  /**
   * The default image background color
   */
  imageBg: '#F5F5F5',
  /**
   * separate line color
   */
  ListBorder:palette.lightestGrey,
  /**
   * The default list separate line color
   */
  commonBorder:'#F4F3F6',
  /**
   * 黑色透明背景
   */
  translucentBg:['rgba(0,0,0,0.01)', 'rgba(51,51,51,0.9)'],
};
