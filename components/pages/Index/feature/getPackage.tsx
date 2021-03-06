import { Select, Slider, Input, Spacer } from "@geist-ui/react";
import { useState, useEffect } from "react";


interface Package {
    toggle: boolean
}




const getPackage = ({ toggle }: Package) => {
    const [cost, setCost] = useState<number>(0)
    const [kilogram, setKilogram] = useState<number>(0)
    const [from, setFrom] = useState<number>(0);
    const [to, setTo] = useState<number>(0);



    useEffect(() => {
        if (to > 0 && from > 0 && kilogram > 0) {
            setCost(to * from * kilogram)
        }
    }, [to, from, kilogram])





    return (
        <>
            <div className="get-package">
                <div className={toggle ? "get-package_container display_package_block" : "display_package_none get-package_container"}>
                    <div className="input_from">
                        <p className='f-size-p4 f-weight-r'>სად</p>
                        <Spacer y={0.5} />
                        <Select
                            className="get-package_inputs"
                            placeholder="საიდან"
                            onChange={(value) => setFrom(+value)}>
                            <Select.Option value="1">Option 1</Select.Option>
                            <Select.Option value="2">Option 2</Select.Option>
                        </Select>
                    </div>


                    <div className="input_country">
                        <p className='f-size-p4 f-weight-r'>საიდან</p>
                        <Spacer y={0.5} />
                        <Select
                            className="get-package_inputs"
                            placeholder="ქვეყანა"
                            onChange={(value) => setTo(+value)}>
                            <Select.Option value="1">Option 1</Select.Option>
                            <Select.Option value="2">Option 2</Select.Option>
                        </Select>
                    </div>


                    <div className="input_kilograms">
                        <p className='f-size-p4 f-weight-r' style={{ marginBottom: '.5rem' }}>{kilogram}კგ</p>
                        <Spacer y={0.5} />
                        <Slider
                            value={kilogram}
                            initialValue={20}
                            onChange={(value) => setKilogram(value)} />
                    </div>


                    <div className="input_cost">
                        <p className='f-size-p4 f-weight-r' style={{ marginBottom: '.5rem' }}>ხარჯი</p>
                        <Spacer y={0.6} />
                        <Input
                            value={`${cost}`}
                            disabled={true}
                            width="100%"
                            className="input"
                            status="secondary"
                            size="large"
                            placeholder="ფასი"
                        />
                    </div>

                    {/* 
                    <Button size="small" width="100%" color="yellow" className="package_search" onClick={() => handleSend()}>
                        <p className="f-size-p2 f-weight-bo">ძებნა</p>
                    </Button> */}

                </div>

            </div>

        </>
    );
};

export default getPackage;
