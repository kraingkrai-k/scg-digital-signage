import React, {useState} from "react";
import Box from "@mui/material/Box";
import {useHistory} from "react-router-dom";

import BGFooter from "assets/images/bg-footer.png";
import {COLORS} from "core/utils/constant";

import Footer from "component/Footer";
import Navbar from "component/Navbar";
import NavbarShape from "component/NavbarShape";
import {XPTemplate} from "component/XPRecommend";
import Promotion from "component/Promotion";
import {Title45} from "component/common/Font.styles";
import ModalPromotion from "component/ModalPromotion";
import MyModal from "component/Modal";

// TODO - polling personal, go to template 3
const Template2: React.FC = (): React.ReactElement => {
    const {push} = useHistory()
    const [visible, setVisible] = useState<boolean>(false)


    const handlerPromotionClick = () => {
        handlerOpenModal()
    }

    const handlerProductClick = () => push('/interactive')

    const handlerCloseModal = () => {
        setVisible(false)
    }

    const handlerOpenModal = () => {
        setVisible(true)
    }

    // * banner 10%, xp 15%, video 30%, promotion 15%, footer 30%
    return (
        <Box sx={{
            height: '100vh', width: '100%',
            backgroundImage: `url(${BGFooter})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            objectFit: 'fill',
        }}>
            <MyModal
                onCancel={handlerCloseModal}
                onOK={handlerOpenModal}
                visible={visible}
            >
                <ModalPromotion />
            </MyModal>

            <Box sx={{height: '10%', position: 'relative'}}>
                <Navbar />
                <NavbarShape />
            </Box>

            <XPTemplate>
                <Title45>
                    “ มาตรงนี้ให้ <span style={{color: COLORS.red}}>น้อง XP</span>
                </Title45>

                <Title45>
                    ช่วยแนะนำบริการได้ค่ะ ”
                </Title45>
            </XPTemplate>

            <Box
                sx={{
                    bgcolor: COLORS.holder,
                    width: '100%',
                    height: '30vh',
                    position: 'relative',
                    zIndex: 1,

                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Title45 sx={{color: COLORS.white}}>
                    Video Consent
                </Title45>
            </Box>

            <Promotion
                onPromotionClick={handlerPromotionClick}
                onProductClick={handlerProductClick}
            />
            <Footer />
        </Box>
    )
};

export default Template2;
