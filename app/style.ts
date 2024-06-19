import * as colors from './../constants/Colors'
import { AppFonts } from "@/helper/AppFont";
import { ScaleFonts } from "@/helper/ScaleFonts";
import { ScaleSize } from "@/helper/ScaleSize";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  scrollButton:{
    borderTopWidth:ScaleSize.SIZE_3,
    width:ScaleSize.SIZE_22*2,
    borderColor:colors.grey,
    alignSelf:'center',
    marginBottom:ScaleSize.SIZE_30
  },
  imageView: {
    position: 'absolute',
    top: 0,
    height: ScaleSize.SIZE_350,
    width: '100%'
  },
  image: {
    flex: 1,
    width: '100%'
  },
  otherDetailsView: {
    height: ScaleSize.SIZE_620,
    backgroundColor: colors.white,
    width: '100%',
    borderTopLeftRadius: ScaleSize.SIZE_90,
    borderTopEndRadius: ScaleSize.SIZE_90,
    position: 'absolute',
    bottom: 0,
    paddingTop: ScaleSize.SIZE_20,
    paddingBottom: ScaleSize.SIZE_60 * 2,
    paddingHorizontal: ScaleSize.SIZE_50,
  },
  titleContainer: {
    alignItems: 'center',
    gap: ScaleSize.SIZE_10,
  },
  headingText: {
    fontFamily:AppFonts.FONT_SEMI_BOLD,
    fontSize: ScaleFonts.FONT_28
  },
  subtitleText: {
    fontFamily:AppFonts.FONT_REGULAR,    
    fontSize: ScaleFonts.FONT_16,
    color: colors.gunMetal,
  },
  schedualMainVIew: {
    flexDirection: 'row',
    marginVertical: ScaleSize.SIZE_10,
    alignItems: 'center'
  },
  iconView: {
    paddingTop: ScaleSize.SIZE_3,
  },
  scheduleView: {
    marginHorizontal: ScaleSize.SIZE_30/2,
    justifyContent: 'center'
  },
  scheduleTitle: {
    fontSize: ScaleFonts.FONT_18,
    fontFamily:AppFonts.FONT_SEMI_BOLD,
    // fontWeight: '500',
    color: colors.gunMetal,
  },
  scheduleSubTitle: {
    fontSize: ScaleFonts.FONT_14,
    color: colors.darkGrey,
    fontFamily:AppFonts.FONT_LIGHT
  },
  scheduleSubTitleLink: {
    fontSize: ScaleFonts.FONT_14,
    fontWeight: '500',
    color: colors.lightBlue
  },
  otherDetailsTitle: {
    marginTop: ScaleSize.SIZE_24,
    fontSize: ScaleFonts.FONT_20,
    color: colors.gunMetal,
    fontFamily:AppFonts.FONT_SEMI_BOLD
  },
  otherDetailsSubtitle: {
    fontSize: ScaleFonts.FONT_16,
    color: colors.gunMetal,
    fontFamily:AppFonts.FONT_REGULAR
  },
  buyTicketsMianView: {
    position: 'absolute',
    width: '100%',
    height: ScaleSize.SIZE_50 * 2,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buyTicketsView: {
    width: ScaleSize.SIZE_330,
    height: ScaleSize.SIZE_50,
    backgroundColor: colors.lightBlue,
    borderRadius: ScaleSize.SIZE_30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  BuyTicketstext: {
    fontSize: ScaleFonts.FONT_18,
    color: colors.white,
    fontWeight: '600'
  },
  itemIcon: {
    width: ScaleSize.SIZE_26,
    height: ScaleSize.SIZE_26
  }
});