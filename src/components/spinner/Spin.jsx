import React from "react";
import { useSelector } from "react-redux";
import { TailSpin } from "react-loader-spinner";
import { spin } from "../../redux/reducers/loaderReducer/loaderSelector";

const Spin = () => {
    const spinner = useSelector(spin)

    return (
        <div>
            <TailSpin
                color="#00BFFF"
                height={100}
                width={100}
                visible={spinner}
            />
        </div>
    )
}

export default Spin;