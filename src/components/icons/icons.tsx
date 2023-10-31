export const SearchIcon = ({
  width,
  height,
  className,
}: {
  width: any;
  height: any;
  className?: any;
}): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_377_1416)">
        <path
          d="M19.375 17.5H18.3875L18.0375 17.1625C19.2625 15.7375 20 13.8875 20 11.875C20 7.3875 16.3625 3.75 11.875 3.75C7.3875 3.75 3.75 7.3875 3.75 11.875C3.75 16.3625 7.3875 20 11.875 20C13.8875 20 15.7375 19.2625 17.1625 18.0375L17.5 18.3875V19.375L23.75 25.6125L25.6125 23.75L19.375 17.5ZM11.875 17.5C8.7625 17.5 6.25 14.9875 6.25 11.875C6.25 8.7625 8.7625 6.25 11.875 6.25C14.9875 6.25 17.5 8.7625 17.5 11.875C17.5 14.9875 14.9875 17.5 11.875 17.5Z"
          fill="black"
          fill-opacity="0.88"
        />
      </g>
      <defs>
        <clipPath id="clip0_377_1416">
          <rect width="30" height="30" rx="8" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export const SortIcon = ({
  width,
  height,
  className,
}: {
  width: any;
  height: any;
  className?: any;
}): JSX.Element => {
  return (
    <svg width={width} height={height} className={className} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <rect width="30" height="30" fill="url(#pattern0)"/>
    <defs>
    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlinkHref="#image0_377_1536" transform="scale(0.0104167)"/>
    </pattern>
    <image id="image0_377_1536" width="96" height="96" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABZklEQVR4nO3buRHDMBQDUXbt0ApdAlgtnLgBR/jHYoaxNPuUMNA5jDHGGGOMMcYYY4w12L33ufd+0u+xOb5/B4RgfIOQj28Q8vENQj6+QcjHNwj5+AYhH98g5OMbhHx8g5CPbxDy8Q1CPr5ByMc3CPn4BiEf36sRisT3SoRi8b0KoWh8r0AoHt+jEZrE90iEZvE9CqFpfI9AaB7frRGGxHdLhGHx3QphaHy3QBge36URlsR3SYRl8V0KYWl8l0JgjDHGGGOM7ZqkV4ELkRNH0vtU2EYEVYm/EUHV4m9CUNX4GxBUPf5kBHWJPxFB3eJPQlDX+BMQ1D1+ZwRNid8RQdPid0LQ1PgdEDQ9fmUEbYlfEUHb4ldC0Nb4FRC0PX4SgfhBBPHl5xBE/ByCiJ9DEPFzCCJ+DkHEzyGI+DkEET+HIOLnEET8HIKIn0MQ8XMIIn70H+Un9HjGGGOMMcYYY4wxxs4/+wKXUcNbw4zaXwAAAABJRU5ErkJggg=="/>
    </defs>
    </svg>
    

  );
};
export const AddResidentIcon = ({
  width,
  height,
  className,
}: {
  width: any;
  height: any;
  className?: any;
}): JSX.Element => {
  return (
    <svg width={width} height={height} className={className} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <rect width="30" height="30" fill="url(#pattern1)"/>
    <defs>
    <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlinkHref="#image0_501_696" transform="scale(0.0104167)"/>
    </pattern>
    <image id="image0_501_696" width="96" height="96" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFFElEQVR4nO2dXYhWRRiAJ43cylJLTQk0DCMMjYhu6qJuoqJLK0utoAulROznwotuVKjsz6DAcku669abfi68iCjbioiiqLSLwOii3W39SalV2ifevllYzW3mnDNn3pnvzAMLy/m+PfP+nPPOvDPvzBpTKBQKhUKhUCgUCoVCoVAoJAZwKfAA8CbwBTAMnLI/w/baIHA/cIm2vH0DcA2wFziJP/Ldt4Dl2vJnC3Ah8BJwmvrI2/ECMKCtT1YAy4FvCccQsFhbrywAbrAxPTS/AKu09cvhyR9uwfhTnbBIW88kAQaAr2mfL6V/0dY3Oeh1uLHYrq1vikPN0xEd8EcJRWc6YC/x2a33yKWX4Z5UcMCJkjGbfx0g0wtarDFdh97cjhZ7TNehN4mmxZDpOsCIogN+M10HGFd0wF+m61AcoO6AEcU3oIQgSies/gYMKr4Bb5iuQ28NV4t7TdcBZttpgdhIm7O19U8CegvosRnU1ju1lbBTEY0vuccybb2Tgl71Qiye09Y31SXJoQjG/xSYpa1vkgCLgMMtGv9X4EptPZMGWGWrF0Ijjl2prV8WAAuAjwKHnVKOUtEJs6R6oWGOIKOdZ0vMb94v7K7oCPnunjLUDJ8xr5H5G+Azmcm0T/i4/V2uvQ7cVzLcQqFQKBQyAVhoO/hXgA+Ag8DYlE5+zF6Tz3bZjn6BttxZA8wDHrPzTxM1cowJm+A9CszV1ie3vOJFWyEdiuPA88AV2volC3A+sAU4RntIArhV2tLWNymAZZGrLz4HrtLWOwmAu4GjxEc67jtNlwHWR17qPBvZ9fOI6SLAwzVHN6ERGdab3ADmALfYp/hpW8C1D7jIM+zE3HPmQt7CO0yqABcDtwJPAe8Ah6Z5end5drhHSA/pE5aaVACuBZ4E9kuZuIcCf7qOG7BDTc0NHy4k6ZsZz8r/NdCNwGvAzzWEf9Xj/k+QPpvjWPvMWC4p/1cNBb/eI8OVjLQRHvo0RYbEC4Ma+X9CzNuBtqD+4NGeTC80xqOdEOwMZuhzCHi17Uj/JhzbPCbWgszteOgXguPBJ/DsAUs7bGcZmuscbUuIIyMHCBtDGn8l8B3tDd/Oc7QvC/K5OeBAKOOvbempn2S/x2LKRIYOkBA9v6nxNweO9ZUrme1KFhk6QLin6daiCe1tRPSWEXN1wMtNYn6bYWcqNztkkXVab2opXM02VXivbiMfEo8VDll+qnKzuoatYJsqHKrTwG3EZbFDntEqN2tiXE/7VGEkh329AyHPmmhiXE/7tHtWBfA9cbnAIU/nHNB4wqsilznk+b3KzZoY19M+VRhuu4EQLO3jTvhg2w2E4CaHPO9XuVkT47Zgn3fbbiAE6xzydCsRIz7bHPJIoWwwIuu/OgcH7PPYUZnrZNzlOThgFJjhkEmqlIMQUf+PKxtfyQG4zv23JeJBiKj/hpwcsNUh09xQ+Ukk/aVCe05ODvgm1mkrkfR/ppbxFR2A65wH2RwRovY/gv5H+nZ7E/A46bPJ9Cv0ShODLdC3wAHV0sQYAEuqrhFEYqwzu2aAu5Q3ZpyNTJnfbroE8GAiGzQk411rugiwTvlNGO+s8SeRnSk2/sZmtHNhZzpkUSfSiYxTRztLphWoiwAzgIdaHiEdtZvB+3uo2QRbS7oz8Nr2MXs2XX9muG1gJ/A22nBRp75V/uYTmdWsPbFWMJPOmC+FsrJEKOWCwI82VE0eVyO/yzX5TP7n5epaiynn4B/iafXOphlvMAAAAABJRU5ErkJggg=="/>
    </defs>
    </svg>
    
  );
};

export const CloseIcon = ({
  width,
  height,
  className,
}: {
  width: any;
  height: any;
  className?: any;
}): JSX.Element => {
  return (
    <svg  width={width} height={height} className={className}  viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <rect width="16" height="16" fill="url(#pattern2)"/>
    <defs>
    <pattern id="pattern2" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlinkHref="#image0_376_1294" transform="scale(0.0104167)"/>
    </pattern>
    <image id="image0_376_1294" width="96" height="96" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB5UlEQVR4nO2dzVLCMBgA+0x6wDfDmx59WZ2+wToM5uAMYkHk+8numQPdTSYlzdBlERERERERERERkVoAz8BuaQ6wO1zrkgnglSMr8LQ0BXgEPr6u9W1JJp/OEfgunxQRTshvGYHT8mMjnJHfKgLn5cdE+Fpwt7BWXpg5LriHa9jC/RZm4AF4vyDCU9ORHzfQOkcgu/zOEagiv2MEqsnvFIGq8jtEoLr8yhHoIr9iBLrJrxSBrvIrRKC7/MwRmEV+xgjMJj9TBGaVnyECs8uPjIDy4yKg/LgIKD8uAsqPi4Dy4yKg/LgIKD8uAsqPi4DyQ8/irBd+tucv3OCZsAXlB0ZYHflxM2FVflyEVflxEVbl3xAuu9VMc+RlVvkDIwTKHxghUP7ACIHyB0a4QP7OrYgguGJjLcORlxbwh11NIwTKHxjhSrjhfr4RAuUPjLCR/3yShQtznPyBEX7gns9wcSbEyR8YIcERcWafCRmOjjBrhAzyp42QSf50ETLKnyZCZvntI1SQ3zZCJfntIlSU3yZCZfnlI3SQXzZCJ/nlInSUXyZCZ/klIvjXxSe57zsFgD0NR/6VM+FlieBMhBbyN0Z4if5y+87yf4kQK/9EhJbyf4iQQ/7Al/iIiIiIiIiIiIjIkplPEtv2p25zkkEAAAAASUVORK5CYII="/>
    </defs>
    </svg>
    
  );
};
export const EditIcon = ({
  width,
  height,
  className,
}: {
  width: any;
  height: any;
  className?: any;
}): JSX.Element => {
  return (
    <svg width={width} height={height} className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 12.6671V16H3.33287L13.1626 6.17025L9.82975 2.83738L0 12.6671ZM15.74 3.59283C16.0867 3.24622 16.0867 2.68629 15.74 2.33968L13.6603 0.259964C13.3137 -0.0866546 12.7538 -0.0866546 12.4072 0.259964L10.7807 1.8864L14.1136 5.21927L15.74 3.59283Z" fill="white"/>
    </svg>
    
  );
};
export const ErrorIcon = ({
  width,
  height,
  className,
}: {
  width: any;
  height: any;
  className?: any;
}): JSX.Element => {
  return (
    <svg width={width} height={height} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M44 60H52V68H44V60ZM44 28H52V52H44V28ZM47.96 8C25.88 8 8 25.92 8 48C8 70.08 25.88 88 47.96 88C70.08 88 88 70.08 88 48C88 25.92 70.08 8 47.96 8ZM48 80C30.32 80 16 65.68 16 48C16 30.32 30.32 16 48 16C65.68 16 80 30.32 80 48C80 65.68 65.68 80 48 80Z" fill="#FF2E2E"/>
    </svg>
    
  );
};
export const SuccessIcon = ({
  width,
  height,
  className,
}: {
  width: any;
  height: any;
  className?: any;
}): JSX.Element => {
  return (
    <svg width={width} height={height} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_619_809)">
    <path d="M48 8C25.92 8 8 25.92 8 48C8 70.08 25.92 88 48 88C70.08 88 88 70.08 88 48C88 25.92 70.08 8 48 8ZM48 80C30.36 80 16 65.64 16 48C16 30.36 30.36 16 48 16C65.64 16 80 30.36 80 48C80 65.64 65.64 80 48 80ZM66.36 30.32L40 56.68L29.64 46.36L24 52L40 68L72 36L66.36 30.32Z" fill="#2A9928"/>
    </g>
    <defs>
    <clipPath id="clip0_619_809">
    <rect width="96" height="96" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    
    
  );
};
export const WarnIcon = ({
  width,
  height,
  className,
}: {
  width: any;
  height: any;
  className?: any;
}): JSX.Element => {
  return (
    <svg width={width} height={height} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M48 23.96L78.12 76H17.88L48 23.96ZM48 8L4 84H92L48 8ZM52 64H44V72H52V64ZM52 40H44V56H52V40Z" fill="#FFC566"/>
</svg>

  );
};
export const BuildingIcon = ({
  width,
  height,
  className,
}: {
  width: any;
  height: any;
  className?: any;
}): JSX.Element => {
  return (
    <svg width={width} height={height} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<rect width="44" height="44" fill="url(#pattern432)"/>
<defs>
<pattern id="pattern432" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_759_693" transform="scale(0.0104167)"/>
</pattern>
<image id="image0_759_693" width="96" height="96" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABUElEQVR4nO2UwQnEMBDE3H/Tuh5iOHltCeYZCBrPrhUREREREfF/kPM8VIALFVABo+Hx6PB4dHg8OjweHR6PDo9Hh8ejw+M5jt0fZvj3OrYAKmC2QFrAqoAd7BdIC5gtkE7QqoAd7BdIC7g7x2MLogJ8SbQAXxSdoDtzPLYgKsCXRAvwRdEJ+nZDGf69ji2ACpgtkBawKmAH+wXSAmYLpBO0KmAH+wXSAu7O8diCqABfEi3AF0Un6M4cjy2ICvAl0QJ8UXSCvt1Qhn+vYwugAmYLpAWsCtjBfoG0gNkC6QStCtjBfoG0gLtzPLYgKsCXRAvwRdEJujPHYwuiAnxJtABfFJ2gbzeU4d/r2AKogNkCaQGrAnawXyAtYLZAOkGrAnawXyAt4O4cjy2ICvAl0QJ8UXSC7szx2IKoAF8SLcAXxasnKCIiIiIiIiIi1pH8AIN9c0RlQ7dnAAAAAElFTkSuQmCC"/>
</defs>
</svg>

  );
};