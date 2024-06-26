"use client";
import Link from "next/link";
import ProfileMenu from "./headerProfileMenu";
import Search from "./headerSeachBar";
import Button from "./Button";
import Notification from "./icons/Notification";
import MenuBtn from "./MenuBtn";
import { t } from "../libs/transition";
import { Suspense } from "react";
const Btns = function () {
  return (
    <>
      <Button icon={<Notification />} aria-label={t("Notifications")} />
    </>
  );
};

async function Header({ data: { users } }) {
  await new Promise((a)=>setTimeout(a,300))
  return (
    <>
      <Search />
      <div className="desktop-layout-end">
        {users && <Btns />}

        <ProfileMenu user={users} />
      </div>
    </>
  );
}
export default function (props) {
  return (
    <div className={`desktop-header`}>
      <div className="desktop-layout-start">
        <MenuBtn />
        <Link
          className="logo"
          href="/"
          aria-label={t("Go_to_homepage") + " - " + "yoth"}
        >
          <svg
            width="32px"
            style={{ width: "32px", height: "32px" }}
            height="32px"
            viewBox="0 0 200 200"
          >
            <path
              d="M130.91424,21.21283h50.03697c10.50242,0 19.04879,8.54515 19.04879,19.04758v137.66273c0,10.50242 -8.54636,19.04727 -19.04879,19.04727h-161.90515c-10.50273,0 -19.04606,-8.54485 -19.04606,-19.04727v-137.66273c0,-10.50242 8.54333,-19.04758 19.04606,-19.04758h50.0397l-10.82636,-13.23242c-1.05939,-1.29606 -0.86697,-3.20485 0.42909,-4.26424c1.29303,-1.06242 3.19909,-0.87 4.26424,0.42606l13.63636,16.66667c0.10061,0.12303 0.13545,0.27121 0.21333,0.40394h46.39515c0.07788,-0.13273 0.11273,-0.28091 0.21333,-0.40394l13.63636,-16.66667c1.06242,-1.29303 2.97121,-1.48697 4.26424,-0.42606c1.29606,1.05939 1.48848,2.96818 0.42909,4.26424zM122.96394,132.05586l22.3603,-22.36182c4.72606,-4.72455 4.72303,-12.41424 -0.00273,-17.1403c-2.28758,-2.28879 -5.3297,-3.5497 -8.56727,-3.5497c-3.2403,0 -6.28242,1.26091 -8.57,3.5497l-13.7903,13.7903l-20.21788,-20.21636c-2.2903,-2.2903 -5.33242,-3.55121 -8.57,-3.55121c-3.2403,0 -6.28242,1.26212 -8.57,3.55121l-22.36333,22.3603c-4.72606,4.72606 -4.72303,12.41576 0.00303,17.14182c4.72,4.72303 12.41121,4.72879 17.13697,0l13.79333,-13.7903l20.21788,20.21636c2.28758,2.28879 5.33242,3.5497 8.57,3.5497c3.23758,0 6.2797,-1.26091 8.57,-3.5497z"
              fillRule="evenodd"
              fill="#ff9a1d"
            ></path>
            <path
              d="M122.96394,132.05586l22.3603,-22.36182c4.72606,-4.72455 4.72303,-12.41424 -0.00273,-17.1403c-2.28758,-2.28879 -5.3297,-3.5497 -8.56727,-3.5497c-3.2403,0 -6.28242,1.26091 -8.57,3.5497l-13.7903,13.7903l-20.21788,-20.21636c-2.2903,-2.2903 -5.33242,-3.55121 -8.57,-3.55121c-3.2403,0 -6.28242,1.26212 -8.57,3.55121l-22.36333,22.3603c-4.72606,4.72606 -4.72303,12.41576 0.00303,17.14182c4.72,4.72303 12.41121,4.72879 17.13697,0l13.79333,-13.7903l20.21788,20.21636c2.28758,2.28879 5.33242,3.5497 8.57,3.5497c3.23758,0 6.2797,-1.26091 8.57,-3.5497z"
              fill="#ffff"
              fillRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
      <Suspense
        fallback={
          <>
            <div className="skeleton-image-square" />
          </>
        }
      >
        <Header {...props} />
      </Suspense>
    </div>
  );
}
