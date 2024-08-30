import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import handleNext from '../../utils/handleNext';
import { StepContext } from "../../context/StepContext";
import NextButton from "./UI/NextButton";
import BackButton from "./UI/BackButton";
import NumberInputField from "./UI/NumberInputField";
import CheckboxInputField from "./UI/CheckboxInputField";

const PropertyInfo = () => {
    const { formData, updateFormData } = useContext(FormContext);
    const { nextStep, prevStep } = useContext(StepContext);

    return (
        <form onSubmit={(event) => handleNext(event, nextStep)}
            className="tw-flex tw-flex-col tw-h-full"
            noValidate
        >

            <div className="tw-flex tw-flex-col tw-grow tw-gap-12 xl:tw-pl-16 tw-py-4 tw-min-h-80">

                <div className="tw-flex tw-gap-x-16 tw-gap-y-8 tw-flex-wrap">
                    <NumberInputField 
                        label="Bedrooms"
                        field="bedrooms"
                        formData={formData}
                        updateFormData={updateFormData}
                    />
                    
                    <NumberInputField 
                        label="Bathrooms"
                        field="bathrooms"
                        formData={formData}
                        updateFormData={updateFormData}
                    />
                </div>

                <div className="tw-flex tw-flex-col tw-gap-4">
                    <p className="tw-font-medium tw-text-slate-700">Select the available room features</p>
                    <div className="tw-flex tw-gap-4 xl:tw-gap-8 tw-flex-wrap">
                        <CheckboxInputField 
                            label="Balcony"
                            field="balcony"
                            formData={formData}
                            updateFormData={updateFormData}
                        />

                        <CheckboxInputField 
                            label="Kitchen"
                            field="kitchen"
                            formData={formData}
                            updateFormData={updateFormData}
                        />

                        <CheckboxInputField 
                            label="Living Room"
                            field="livingroom"
                            formData={formData}
                            updateFormData={updateFormData}
                        />
                    </div>
                </div>

            </div>

            <div className="tw-flex tw-justify-between tw-items-center tw-py-4">
                <BackButton prevStep={prevStep} />
                <NextButton />
            </div>

        </form>
    )
}

export default PropertyInfo;