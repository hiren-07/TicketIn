import { StyleSheet } from "react-native";
import * as colors from './../constants/Colors'
import { ScaleFonts } from "@/helper/ScaleFonts";
import { ScaleSize } from "@/helper/ScaleSize";
import { AppFonts } from "@/helper/AppFont";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  },
  queNumberText: {
    fontFamily:AppFonts.FONT_SEMI_BOLD,
    fontSize: ScaleFonts.FONT_16,
    lineHeight: ScaleSize.SIZE_17,
    letterSpacing: -0.25,
    color: colors.lightBlue,
    
  },
  questionText: {
    fontFamily:AppFonts.FONT_BOLD,
    fontSize: ScaleFonts.FONT_28,
    lineHeight: ScaleSize.SIZE_17 * 2,
    letterSpacing: -0.25,
    paddingTop: ScaleSize.SIZE_10,
    color: colors.gunMetal
  },
  ansWrap: {
    marginTop: ScaleSize.SIZE_40,
    flex: 1
  },
  ansTextInput: {
    fontFamily:AppFonts.FONT_SEMI_BOLD,
    fontSize: ScaleFonts.FONT_28,
    lineHeight: ScaleSize.SIZE_17 * 2,
    letterSpacing: -0.25,
    paddingTop: ScaleSize.SIZE_10,
    color: colors.gunMetal
  },
  optionBtn: {
    height: ScaleSize.SIZE_40,
    backgroundColor: 'rgba(255,255,255,0.35)',
    borderRadius: ScaleSize.SIZE_10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: ScaleSize.SIZE_10,
    flexDirection: 'row'
  },
  optionBtnIconWrap: {
    position: 'absolute',
    flex: 1,
    zIndex: 999, 
    right: ScaleSize.SIZE_3 * 4
  },
  optionBtnIcon: { width: ScaleSize.SIZE_20, height: ScaleSize.SIZE_20 },
  optionBtnText: {
    fontSize: ScaleFonts.FONT_22,
    lineHeight: ScaleSize.SIZE_24,
    color: colors.violetBlue,
    fontFamily:AppFonts.FONT_BOLD
  },

  btnSubmit: {
    height: ScaleSize.SIZE_40,
    backgroundColor: colors.lightBlue,
    borderRadius: ScaleSize.SIZE_30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    fontSize: ScaleFonts.FONT_18,
    color: colors.white,
    fontFamily:AppFonts.FONT_SEMI_BOLD
  }

})