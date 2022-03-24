import React from "react";
import {styled} from '@mui/material/styles';
import Grid from "@mui/material/Grid";

import {COLORS} from "core/utils/constant";

export const Text = styled('span')(({theme}) => `
font-size: 48px;
    .italic {
        font-size: 36px;
    }
    .sub-italic {
        font-size: 30px;
    }

${theme.breakpoints.only('monitor43')}{
 
};
${theme.breakpoints.only('desktop')}{
  
};
${theme.breakpoints.only('xl')}{
  
};
${theme.breakpoints.only('lg')}{
    font-size: 42px;
    .italic {
        font-size: 30px;
    }
    .sub-italic {
        font-size: 22px;
    }

};
`);

interface INavbarText {
    isTemplate1?: boolean
}

const NavbarText: React.FC<INavbarText> = ({isTemplate1 = true}): React.ReactElement => {

    return (
        <div>
            <Grid container justifyContent={isTemplate1 ? "center" : "start"}>
                <Grid item>
                    <Text style={{color: isTemplate1 ? COLORS.red : COLORS.black2}}>
                        ครบ
                    </Text>
                </Grid>
                <Grid item>
                    <Text style={{color: isTemplate1 ? COLORS.red : COLORS.black2}}>
                        <span className="italic">
                            ทุกโซโลชัน
                        </span>
                    </Text>
                </Grid>
                <Grid item>
                    <Text style={{marginLeft: '1rem', color: COLORS.white}}>
                        <span className="sub-italic">
                            เรื่องบ้าน ที่เดียวจบ...
                        </span>
                    </Text>
                </Grid>
            </Grid>

            <Grid container justifyContent={isTemplate1 ? "center" : "start"} alignItems="flex-start">
                <Grid item>
                    <Text sx={{color: COLORS.white}}>
                        <span className="sub-italic">
                            ที่ SCG HOME Experience
                        </span>
                    </Text>
                </Grid>
            </Grid>
        </div>
    )
};

export default NavbarText;
