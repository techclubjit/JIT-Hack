/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import React, { ReactNode } from "react";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';


interface Props {
    border: string;
    color: string;
    children?: React.ReactNode;
    height: string;
    onClick: () => void;
    width: string;
    padding: string;
  }
  
  const Button: React.FC<Props> = ({ 
      border,
      color,
      children,
      height,
      onClick,
      width,
      padding
    }) => { 
    return (
      <ButtonComponent 
        onClick={onClick}
        style={{
           backgroundColor: color,
           border,
           height,
           width,
           padding
        }}
      >
      {children}
      </ButtonComponent>
    );
  }
  
  export default Button;