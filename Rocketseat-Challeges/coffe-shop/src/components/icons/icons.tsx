import Image from "next/image"


import arrow from '../../assets/icons/arrow.svg'
import cardDark from '../../assets/icons/card-dark.svg'
import cardWhite from '../../assets/icons/card-white.svg'
import clock from '../../assets/icons/clock.svg'
import coffe from '../../assets/icons/coffe.svg'
import logoFooter from '../../assets/icons/logoFooter.svg'
import logoHead from '../../assets/icons/logoHead.svg'
import packager from '../../assets/icons/package.svg'
import pinMap from '../../assets/icons/pinMap.svg'
import stars from '../../assets/icons/stars.svg'
import handLike from '../../assets/icons/handLike.svg'
import handDesLike from '../../assets/icons/handDeslike.svg'
import linkedin from '../../assets/icons/linkedin-logo.svg'
import gitHub from '../../assets/icons/github-logo.svg'

export const ArrowIcon = () => <Image src={arrow} alt="Ícone de seta" />;
export const CardDarkIcon = () => <Image src={cardDark} className="-translate-x-[.75px]" alt="Ícone de cartão escuro" />;
export const CardWhiteIcon = () => <Image src={cardWhite} className="-translate-x-[.75px]" alt="Ícone de cartão branco" />;
export const ClockIcon = () => <Image src={clock} alt="Ícone de relógio" />;
export const CoffeIcon = () => <Image src={coffe} alt="Ícone de café" />;
export const LogoFooterIcon = () => <Image src={logoFooter} alt="Ícone do rodapé do logotipo" />;
export const LogoHeadIcon = () => <Image src={logoHead} alt="Ícone do cabeçalho do logotipo" />;
export const PackagerIcon = () => <Image src={packager} alt="Ícone de embalagem" />;
export const PinMapIcon = () => <Image src={pinMap} alt="Ícone de mapa de alfinete" />;
export const StarsIcon = () => <Image src={stars} alt="Ícone de estrelas" />;
export const HandLike = () => <Image src={handLike} alt="Ícone de estrelas" />;
export const HandDeslike = () => <Image src={handDesLike} alt="Ícone de estrelas" />;
export const Linkedin = () => <Image src={linkedin} alt="Ícone de estrelas" />;
export const GitHub = () => <Image src={gitHub} alt="Ícone de estrelas" />;
