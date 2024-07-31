"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { GrLinkNext } from "react-icons/gr";

export default function Home() {
  const [secondPage, setSecondPage] = useState(false);
  const [thirdPage, setThirdPage] = useState(false);
  const [selected, setSelected] = useState(false);
  const [isAccountMatched, setIsAccountMatched] = useState(false);
  const [accountNumber, setAccountNumber] = useState("");
  const [accountHolderName, setAccountHolderName] = useState("");
  const [sortCode, setSortCode] = useState("");
  const [loading, setLoading] = useState(false);

  console.log(sortCode, accountNumber, accountHolderName);

  const handleAccountHolderNameChange = (e: any) => {
    setAccountHolderName(e.target.value);
  };

  const handleSortCodeChange = (e: any) => {
    setSortCode(e.target.value);
  };

  const handleAccountNumberChange = (e: any) => {
    setAccountNumber(e.target.value);
    if (e.target.value.length === 8) {
      setIsAccountMatched(true);
    } else {
      setIsAccountMatched(false);
    }
  };

  const checkInputs = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setThirdPage(true);
    }, 3000);
  };

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: 40,
      }}
      className=""
    >
      <Image
        src={"/image.png"}
        width={400}
        height={400}
        alt="image"
        className="pr-20"
      />

      {loading ? (
        <div>Processing transaction...</div>
      ) : secondPage ? (
        thirdPage ? (
          <div className="px-4 flex justify-center flex-col items-center gap-10">
            <div className="text-center">
              <h2 className="font-bold text-3xl">{`Deposit required: £30,000`}</h2>
            </div>

            <div className="max-w-[700px] text-sm flex flex-col gap-3">
              <p className="">{`Security and Fraud Prevention: Online cheque transfers can offer additional layers of security and fraud prevention. Banks often have rigorous security measures that protect against unauthorized transactions and ensure the legitimacy of large transfers.

`}</p>
              <p>{`Transactional Limits: Some exchanges or financial institutions may have limits on direct crypto purchases. Transferring funds via an online cheque might be a necessary step to bypass these limits or to enable the purchase of larger amounts of cryptocurrency.`}</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4 justify-center items-center px-4">
            <h1 className="font-bold text-xl">{`Choose your bank to receieve the money`}</h1>
            <Select onValueChange={() => setSelected(true)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select your bank" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="Barclays">Barclays</SelectItem>
                  <SelectItem value="HSBC">HSBC</SelectItem>
                  <SelectItem value="Lloyds">Lloyds</SelectItem>
                  <SelectItem value="NatWest">NatWest</SelectItem>
                  <SelectItem value="Nationwide">Nationwide</SelectItem>
                  <SelectItem
                    value="Bank of Scotland 
"
                  >
                    Bank of Scotland
                  </SelectItem>
                  <SelectItem
                    value="Metro Bank 
"
                  >
                    Metro Bank
                  </SelectItem>
                  <SelectItem value="Revolut">Revolut</SelectItem>
                  <SelectItem value="Halifax">Halifax</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {selected && (
              <div className="flex flex-col gap-3">
                <Input
                  placeholder="Account Holder Name"
                  onChange={handleAccountHolderNameChange}
                  className="min-w-[300px]"
                />
                <Input
                  placeholder="Sort Code"
                  onChange={handleSortCodeChange}
                />
                <Input
                  placeholder="Account Number"
                  onChange={handleAccountNumberChange}
                  className={isAccountMatched ? "border-green-500" : ""}
                />
                {isAccountMatched && (
                  <div className="">
                    <p className="text-green-700 text-xs">Account Matched</p>
                    <button
                      className="bg-green-500 text-white p-2 rounded-md flex ml-auto disabled:cursor-not-allowed"
                      onClick={checkInputs}
                      disabled={
                        !sortCode || !accountNumber || !accountHolderName
                      }
                    >
                      Redeem Cheque
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )
      ) : (
        <div className="flex flex-col gap-10 max-w-[650px] px-4">
          <h1 className="font-bold text-xl">{`Online Cheque from an international company "Escrow" to Mrs. Lee-Anne Isaacs`}</h1>
          <p className="text-left">{`Current Balance: £576,086.63`}</p>

          <button
            className="flex gap-3 justify-end"
            onClick={() => setSecondPage(!secondPage)}
          >
            <span>{`Next `}</span>
            <GrLinkNext size={25} />
          </button>
        </div>
      )}
    </main>
  );
}
