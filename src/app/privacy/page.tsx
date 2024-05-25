import MaxWidthWrapper from "@/components/MainPageCompo/MaxWidthWrapper";
import Link from "next/link";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";

const Privacy = () => {
  return (
    <div className="bg-zinc-100 py-20 ">
      <MaxWidthWrapper className="lg:w-8/12 md:w-8/12 w-full">
        <p className="text-center ">Updated: January 14, 2023</p>
        <h1 className="flex justify-center lg:items-start items-center text-4xl lg:text-6xl text-bg-zinc-900">
          Privacy policy
        </h1>

        <div className=" text-start lg:pt-8 md:pt-8 pt-4 text-lg">
          <h1 className="font-extrabold py-5 mt-8">
            Effective: April 31, 2024
          </h1>
          <p className="italic">
            This Privacy Policy outlines how iEdito handles the storage and
            processing of data related to images uploaded by users on our
            platform.
          </p>
          <div>
            <h1 className="text-2xl mt-4">1. Data Collection</h1>
            <ul className="list-disc ml-6 mt-4">
              <li>
                We do not collect personal information from users for image
                processing purposes.
              </li>
              <li>
                Images uploaded by users are temporarily stored on our servers
                while the processing takes place.
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-2xl mt-4">2. Data Storage and Destruction</h1>
            <ul className="list-disc ml-6 mt-4">
              <li>
                Images uploaded by users are stored temporarily on our servers.
              </li>
              <li>
                Once the user quits or refrains from using our service, the
                image data is promptly destroyed and not retained.
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-2xl mt-4">3. Third-Party Services</h1>
            <ul className="list-disc ml-6 mt-4">
              <li>
                We may utilize third-party services for instant image
                processing. These services may have their own privacy policies,
                and users are encouraged to review them.
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl mt-4">4. Data Security</h1>
            <ul className="list-disc ml-6 mt-4">
              <li>
                We implement appropriate security measures to protect the image
                data stored on our servers from unauthorized access, alteration,
                disclosure, or destruction.
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl mt-4">5. Changes to This Policy</h1>
            <ul className="list-disc ml-6 mt-4">
              <li>
                We reserve the right to update or modify this Privacy Policy at
                any time. Users will be notified of any changes via email or
                through our website.
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl mt-4">7. Contact Us</h1>
            <ul className="list-disc ml-6 mt-4">
              <li>
                If you have any questions or concerns about our Privacy Policy,
                please{" "}
                <Link href="/contact">
                  <span className="underline underline-offset-2">
                    contact support
                  </span>
                  .
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Privacy;
