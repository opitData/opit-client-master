 {/* <Dialog
                    dialogAnimation={new SlideAnimation({
                        slideFrom: 'bottom',
                    })}
                    dialogStyle={_styles.dialogStyle}
                    visible={visible}
                > */}
                {/* <DialogContent
                        style={[_styles.dialogContent]}
                    >
                        <View style={[styles.contentAuth, { zIndex: 1 }]}>
                            <Text style={[styles.title, _styles.title]}>
                                {t(`${authSMS2}.title`)}
                            </Text>
                            <Text style={[styles.noteTxt, _styles.details]}>
                                {t(`${authSMS2}.details1`)}
                            </Text>
                            <Text style={[styles.noteTxt, _styles.details]}>
                                {t(`${authSMS2}.tel`)}
                            </Text>
                            <Text style={[styles.noteTxt, _styles.details]}>
                                {t(`${authSMS2}.details2`)}
                            </Text>
                            <View style={_styles.rowInputs}>
                                {threeTextInput()}
                                <View style={_styles.space} />
                                {threeTextInput()}
                            </View>
                            <Text style={[styles.noteTxt, _styles.details]}>
                                {t(`${authSMS2}.tryAgain1`)}
                                <Text style={styles.link}>
                                    {t(`${authSMS2}.tryAgain2`)}
                                </Text>
                            </Text>
                            <View style={[styles.rowDirection, { padding: 25, zIndex: 1 }]}>
                                <LinearGradientBtn
                                    handlePress={async () => {
                                        await setVisible(false);
                                        navigateScreen(props, 'CarsDetailsForm');
                                    }}
                                    content={
                                        <Text style={[styles.noteTxt, _styles.linearGradientBtnTxt]}>
                                            {t(`${authSMS2}.continue`)}
                                        </Text>
                                    }
                                    style={_styles.linearGradientBtn}
                                />
                                <TouchableOpacity
                                    onPress={async () => {
                                        await setVisible(false);
                                        goBack(props);
                                    }
                                    }
                                    style={_styles.outLineBtn}
                                >
                                    <Text style={[styles.noteTxt, _styles.linearGradientBtnTxt]}>
                                        {t(`${authSMS2}.back`)}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <ChipButton handlePress={() => goBack(props)} />
                    </DialogContent>
                </Dialog> */}




            //     <View
            //     showsVerticalScrollIndicator={false}
            //     style={[_styles.scrollView]}
            // >
            //     <ScrollView contentContainerStyle={{ justifyContent: 'center', alignContent: 'center', flex: 1 }}>
            //         <View style={[styles.contentAuth, { zIndex: 1 }]}>
            //             <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            //                 <Text style={[styles.title, _styles.title]}>
            //                     {t(`${authSMS2}.title`)}
            //                 </Text>
            //                 <Text style={[styles.noteTxt, _styles.details]}>
            //                     {t(`${authSMS2}.details1`)}
            //                 </Text>
            //                 <Text style={[styles.noteTxt, _styles.details]}>
            //                     {t(`${authSMS2}.tel`)}
            //                 </Text>
            //                 <Text style={[styles.noteTxt, _styles.details]}>
            //                     {t(`${authSMS2}.details2`)}
            //                 </Text>
            //             </View>
            //             <View style={_styles.rowInputs}>
            //                 {threeTextInput()}
            //                 <View style={_styles.space} />
            //                 {threeTextInput()}
            //             </View>
            //             <View>
            //                 <Text style={[styles.noteTxt, _styles.details]}>
            //                     {t(`${authSMS2}.tryAgain1`)}
            //                     <Text style={styles.link}>
            //                         {t(`${authSMS2}.tryAgain2`)}
            //                     </Text>
            //                 </Text>
            //             </View>
            //             <View style={[styles.rowDirection, { padding: 25, zIndex: 1 }]}>
            //                 <LinearGradientBtn
            //                     handlePress={async () => {
            //                         await setVisible(false);
            //                         navigateScreen(props, 'Auth3');
            //                     }}
            //                     content={t(`${authSMS2}.continue`)}
            //                     width={120}
            //                 />
            //                 <TransparentBtn
            //                     smallborderWidth
            //                     content={t(`${authSMS2}.back`)}
            //                     color={ligth}
            //                     handlePress={async () => {
            //                         await setVisible(false);
            //                         goBack(props);
            //                     }}
            //                 />
            //             </View>
            //         </View>
            //     </ScrollView>
            //     <ChipButton handlePress={() => goBack(props)} />
            // </View>