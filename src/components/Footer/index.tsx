import Icon from "../Icon";
import { NumberFormat } from "../../utils/helper";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";

interface IFooter {
    balance: number;
    currency: string;
}

const Footer = ({ balance, currency }: IFooter) => {
    const { t } = useTranslation();
    
    return (
        <div className={`absolute bottom-6 left-6 ${styles.footer}`}>
            <div className="flex text-white gap-2">
                <Icon name="icons/balance" className="w-10" />
                <div className="flex flex-col">
                    <span className="text-[14px] font-[500]">{t("balance")}</span>
                    <span className="text-[16px] font-[500] text-[#F9C700]">{currency} {NumberFormat(balance)}</span>
                </div>
            </div>

        </div>
    )
}

export default Footer;