"use client";

import { useState } from "react";
import { useMutation } from "react-query";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

const signupUser = async (userData) => {
  const response = await fetch("/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
console.log('response', response);
  if (!response.ok) {
    throw new Error("Signup failed. Please try again." + JSON.stringify(response));
  }

  return response.json();
};

const SignupForm = () => {
  const [formData, setFormData] = useState({
    ai: "2959044",
    ci: "90",
    gi: "913",
    userip: "29.249.50.83",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    MPC_4: "",
    so: "AFF_2959044",
  });

  const [error, setError] = useState("");
  const [onSuccess, setOnSuccess] = useState("");

  const mutation = useMutation(signupUser, {
    onSuccess: (data) => {
      if (data.status === false) {
        setError(data.data);
        setOnSuccess("");
      } else {
        setError("");
        setOnSuccess('Successfully Sent!');
        // Reset the form data on success
        setFormData({
          ai: "2959044",
          ci: "90",
          gi: "913",
          userip: "29.249.50.83",
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          phone: "",
          MPC_4: "",
          so: "AFF_2959044",
        });
      }
    },
    onError: (error) => {
      setError(error.response ? error.response.data.error.description : error.message);
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value, country) => {
    setFormData((prev) => ({
      ...prev,
      phone: `+${country.dialCode}${value.replace(country.dialCode, "")}`,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <div className="container my-5 client-form">
      <form onSubmit={handleSubmit}>
        {/* First Name & Last Name */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="firstname" className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              name="firstname"
              placeholder="First Name"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="lastname" className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              name="lastname"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password & Phone */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="phone" className="form-label">Phone</label>
            <PhoneInput
              country="us"
              value={formData.phone}
              onChange={handlePhoneChange}
              inputProps={{
                name: "phone",
                required: true,
              }}
              containerClass="w-100"
              inputClass="form-control"
            />
          </div>
        </div>

        {/* Creative Name */}
        <div className="mb-3">
          <label htmlFor="MPC_4" className="form-label">Creative Name</label>
          <select
            className="form-select"
            id="MPC_4"
            name="MPC_4"
            value={formData.MPC_4}
            onChange={handleChange}
            required
          >
            <option value="">Select Creative Name</option>
            <option value="أسهم إماراتية مثل أدنوك وسالك تواصل الارتفاع.. هل أنت مستعد لاستغلال الفرصة وتحقيق الأرباح؟">
            أسهم إماراتية مثل أدنوك وسالك تواصل الارتفاع.. هل أنت مستعد لاستغلال الفرصة وتحقيق الأرباح؟
          </option>
          <option value="العملات الرقمية تصنع مليونيرات جدد كل يوم.. هل ستبقى متفرجًا أم تبدأ رحلتك نحو الحرية المالية؟">
            العملات الرقمية تصنع مليونيرات جدد كل يوم.. هل ستبقى متفرجًا أم تبدأ رحلتك نحو الحرية المالية؟
          </option>
          <option value="الذهب كان دائمًا الملاذ الآمن.. تعلّم كيف تستثمر فيه بحكمة وتحمي أموالك من تقلبات السوق!">
            الذهب كان دائمًا الملاذ الآمن.. تعلّم كيف تستثمر فيه بحكمة وتحمي أموالك من تقلبات السوق!
          </option>
          <option value="إعمار والدار العقارية تقودان مستقبل الاستثمار العقاري.. اكتشف كيف تستفيد من هذا القطاع المزدهر!">
            إعمار والدار العقارية تقودان مستقبل الاستثمار العقاري.. اكتشف كيف تستفيد من هذا القطاع المزدهر!
          </option>
          <option value="التداول ليس مغامرة بل فرصة.. تعلّم أسرار السوق واستثمر بثقة في الأسهم الناجحة مثل ديوا واتصالات">
            التداول ليس مغامرة بل فرصة.. تعلّم أسرار السوق واستثمر بثقة في الأسهم الناجحة مثل ديوا واتصالات
          </option>
          <option value="لا تدع الفرص تضيع منك.. الأسواق المالية مليئة بإمكانيات النمو، متى ستتخذ الخطوة الأولى؟">
            لا تدع الفرص تضيع منك.. الأسواق المالية مليئة بإمكانيات النمو، متى ستتخذ الخطوة الأولى؟
          </option>
          <option value="الذهب يواصل الارتفاع ويسجّل أرقامًا قياسية.. هل ستغتنم الفرصة وتصنع ثروتك قبل فوات الأوان">
            الذهب يواصل الارتفاع ويسجّل أرقامًا قياسية.. هل ستغتنم الفرصة وتصنع ثروتك قبل فوات الأوان
          </option>
            {/* Add other options here */}
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-100" disabled={mutation.isLoading}>
          {mutation.isLoading ? "Sending..." : "Send"}
        </button>
        {error && <div style={{ color: 'red', fontWeight: 'bold', fontSize: '14px', marginTop: '10px' }}>{error.message || JSON.stringify(error)}</div>}
        {onSuccess && <div style={{ color: 'green', fontWeight: 'bold', fontSize: '14px', marginTop: '10px' }}>{onSuccess}</div>}
      </form>
    </div>
  );
};

export default SignupForm;
