import Icon from "../Icon";
import { NumberFormat } from "../../utils/helper";

interface IFooter {
    balance: number;
    currency: string;
}

const Footer = ({ balance, currency }: IFooter) => {
    
    return (
        <div className="absolute bottom-6 left-6">
            <div className="flex text-white gap-2">
                <Icon name="icons/balance" className="w-10" />
                <div className="flex flex-col">
                    <span className="text-[14px] font-[500]">BALANCE</span>
                    <span className="text-[16px] font-[500] text-[#F9C700]">{currency} {NumberFormat(balance)}</span>
                </div>
            </div>

        </div>
    )
}

export default Footer;