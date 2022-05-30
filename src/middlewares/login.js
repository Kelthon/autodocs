const express = require("express");
const router = express.Router();

class validator {
    min = 4;
    max = 50;
    isNumeric = false;
    isAlpha = false;
    isAlphaNumeric = false;
    nullable = false;
    errors = [];
    
    validate (text, options) {
        if(!this.nullable) {
            if(text.lenth <= 0 || text.length < this.min)
                return false;
        }

        if(this.max > 0) {
            if(text.length > this.max) return false;
        }

        if(this.isNumeric == true) {
            let isnumeric;
            for(let i in text) {
                isnumeric = text[i] == "0" ? true : 
                            text[i] == "1" ? true : 
                            text[i] == "2" ? true :
                            text[i] == "3" ? true :
                            text[i] == "4" ? true :
                            text[i] == "5" ? true :
                            text[i] == "6" ? true :
                            text[i] == "7" ? true :
                            text[i] == "8" ? true :
                            text[i] == "9" ? true : false; 
                if(isnumeric == false) return false;
            }
        } else if(this.isAlpha == true) {
            let isalpha;
            for(let i in text) {}
        }
    }

    email(email, options) {
        return
    }
    
    text(email, options) {
        return
    }
    
    password(email, options) {
        return
    }
}

router.post("/login", (req, res, next) => {
    const { siape } = req.body;
    
    next();
});

function val(str, params) {

}
val('oi', "A_B_C_D_E_F_G_H_I_J_K_L_M_N_O_P_Q_R_S_T_U_V_W_X_Y_Z".split["_"]);
