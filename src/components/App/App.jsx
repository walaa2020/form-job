import { Container, Header } from "../layout"
import { InputText, LabelText, RadioButton, SelectOption, TextArea, CheckBox, MyButton } from "../UI"
import { useForm, Controller } from "react-hook-form"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { saveFun, saveCookies } from "../../store/data/dataSlice";
import { useState } from "react";

const postValidation = z.object({
  fullName: z.string().min(1, "fullName is required").max(20, "Max is 20"),
  email: z.string().min(8, "email is required"),
  birthdate: z.string().min(1, "date is required"),
  gender: z.string().refine((gender) => gender !== '', {
    message: 'gender is required',
  }),
  skill: z.string().min(1, "skill is required"),
  isAccept: z.boolean().optional(),
  about: z.string().min(1, "about is required"),
  cv: z.instanceof(File, { message: "CV is required" }),
  vedio: z.instanceof(File, { message: "vedio is required" })
})
function App() {
  const dispatch = useDispatch();
  const [saved, setSaved] = useState(false);
  const { register, handleSubmit, control, trigger, formState: { errors } } = useForm(
    {
      resolver: zodResolver(postValidation),
      defaultValues: {
        fullName: "",
        email: "",
        birthdate: "",
        gender: "",
        skill: "",
        isAccept: false,
        about: "",

      }
    });
  const submitHandler = (data) => {
    console.log("SUBMIT");
    const { cv, vedio, ...rest } = data;
    dispatch(
      saveFun({
        ...rest,
        cv: {
          name: data.cv.name,
          size: data.cv.size,
          type: data.cv.type,
        },
        vedio: {
          name: data.vedio.name,
          size: data.vedio.size,
          type: data.vedio.type,
        }
      })
    );
    dispatch(saveCookies({
      ...rest,
      cv: {
        name: data.cv.name,
        size: data.cv.size,
        type: data.cv.type,
      }, vedio: {
        name: data.vedio.name,
        size: data.vedio.size,
        type: data.vedio.type,
      }
    }));
  }
  const previewHandler = async () => {
    const isValid = await trigger();
    if (isValid) {
      setSaved(true);
    }
  };

  const backHandler = () => {
    setSaved(false);
  }
  return (
    <div className="bg-[#D9D9D9] h-full  ">
      <Container variant="secondary" className="px-7">
        <Header>Job Application</Header>
        <hr
          className="h-0.5 w-full  text-[#D9D9D9]"
        />
        <form onSubmit={handleSubmit(submitHandler)} >
          <LabelText>
            Full Name
          </LabelText>
          <InputText
            id="fullName" {...register("fullName")}
            type="text"
            saved={saved}
          />
          {errors.fullName && (
            <p className=" text-sm text-red-600">
              {errors.fullName.message}
            </p>
          )}
          <LabelText>
            Email
          </LabelText>
          <InputText
            type="email"
            id="email" {...register("email")}
            saved={saved}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">
              {errors.email.message}
            </p>
          )}
          <LabelText>
            BirthDate
          </LabelText>
          <InputText
            id="birthdate"
            {...register("birthdate")}
            type="date"
            saved={saved}
          />
          {errors.birthdate && (
            <p className="mt-1 text-sm text-red-600">
              {errors.birthdate.message}
            </p>
          )}
          <LabelText>
            Gender
          </LabelText>
          <SelectOption
            {...register("gender")}
            id="gender"
            saved={saved}
            options={["male", "female"]}
            className="w-[35%] h-10 rounded-lg  border border-gray-300 focus:outline-[#4A148C] focus:ring-0 focus:border-gray-300 "
          />
          {errors.gender && (
            <p className="mt-1 text-sm text-red-600">
              {errors.gender.message}
            </p>)}
          <LabelText>
            Skills
          </LabelText>
          <RadioButton {...register("skill")}
            saved={saved}
            value="React.js" multiple >
            <span>React.js</span>
          </RadioButton>
          <RadioButton {...register("skill")}
            saved={saved}
            value="Flutter" multiple>
            <span>Flutter</span>
          </RadioButton>
          <RadioButton {...register("skill")}
            saved={saved}
            value="UI_UX" multiple>
            <span>UI/UX</span>
          </RadioButton>
          {errors.skill && (
            <p className="mt-1 text-sm text-red-600">
              {errors.skill.message}
            </p>)}
          <CheckBox {...register("isAccept")} saved={saved} />
          <span className="font-semibold pl-3">
            I accept to work remotely
          </span>
          {errors.isAccept && (
            <p className="mt-1 text-sm text-red-600">
              {errors.isAccept.message}
            </p>)}
          <LabelText>
            About
          </LabelText>
          <TextArea
            {...register("about")}
            saved={saved}
            rows="7"
            cols="60"
          />
          {errors.about && (
            <p className="mt-1 text-sm text-red-600">
              {errors.about.message}
            </p>)}
          <label className="block">
            <LabelText>
              Upload video
            </LabelText>
            <Controller
              name="vedio"
              control={control}
              render={({ field }) => (
                <input
                  type="file"
                  disabled={saved}
                  accept="video/*"
                  onChange={(e) => field.onChange(e.target.files?.[0])}
                  className="mt-1 block border border-none text-sm text-gray-500
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-md file:border-0
                     file:text-sm file:font-semibold
                     file:bg-purple-50 file:text-[#4A148C]
                     hover:file:bg-purple-100"
                />
              )}
            />
            {errors.vedio && (
              <p className="text-red-500">{errors.vedio.message}</p>
            )}
          </label>
          <LabelText>
            CV
          </LabelText>
          <Controller
            name="cv"
            control={control}
            render={({ field }) => (
              <input
                type="file"
                disabled={saved}
                accept="image/*"
                onChange={(e) => field.onChange(e.target.files?.[0])}
                className="mt-1 block border border-none text-sm text-gray-500
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-md file:border-0
                     file:text-sm file:font-semibold
                     file:bg-purple-50 file:text-[#4A148C]
                     hover:file:bg-purple-100"

              />
            )}
          />

          {errors.cv && (
            <p className="text-red-500 ">{errors.cv.message}</p>
          )}
          {saved ? (<div className="flex flex-justify gap-8">
            <MyButton
              type="button"
              onClick={backHandler}
            >Back</MyButton>
            <MyButton type="submit">save</MyButton>
          </div>) : (<div className="flex flex-justify gap-8">
            <MyButton
              type="button"
              onClick={previewHandler}
            >continue</MyButton>

          </div>

          )

          }
        </form>
      </Container>
    </div>
  )
}

export default App
