import React from "react";
import Image from "next/image";
import googlePlay from "@/assets/Google_Play_Store_badge_EN.png";

export default function AppDownload() {
  return (
    <div className="mt-4 space-y-4 text-center">
      <p className="text-sm text-black dark:text-white">Get the app.</p>
      <div className="flex justify-center space-x-2">
        <a href="https://play.google.com/store/apps/details?id=com.instagram.android&pcampaignid=web_share">
          <Image
            src={googlePlay.src}
            alt="Google Play"
            className="h-10"
            width={138}
            height={40}
          />
        </a>
        <a href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=0%2C0%2C1920%2C1020">
          <Image
            src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
            alt="App Store"
            className="h-10"
            width={120}
            height={40}
          />
        </a>
      </div>
    </div>
  );
}
