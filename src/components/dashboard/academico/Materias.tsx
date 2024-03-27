import React, {useState} from 'react';
import { IoIosFolder } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";

interface Paragraph {
    color: string;
    title: string;
    commission: string;
    teacher: string;
    text: string;
    link: string;
}

const Materias: React.FC<{ paragraphs: Paragraph[] }>  = ({paragraphs}) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage: number = 6;
    const totalPages: number = Math.ceil(paragraphs.length / itemsPerPage);

    const handleClickPage = (page: number): void => {
        setCurrentPage(page);
    };

    const startIndex: number = (currentPage - 1) * itemsPerPage;
    const endIndex: number = Math.min(
        startIndex + itemsPerPage,
        paragraphs.length,
    );
    const currentItems: Paragraph[] = paragraphs.slice(startIndex, endIndex);

    return (
        <div className={"pt-10 gap-5 grid sm:grid-cols-2 md:grid-cols-3 w-full"}>
            {currentItems.map((paragraph, i) => (
                <Link
                    href={paragraph.link}
                    key={i}
                    className={
                        "shadow hover:shadow-2xl min-h-56 rounded-md cursor-pointer"
                    }
                >
                    <div className={"flex flex-col justify-between h-full relative"}>
                        <div className={"rounded-t-md"}>
                            <div
                                className={
                                    "w-full sm:min-h-20 opacity-85 rounded-t-md flex flex-col p-1"
                                }
                                style={{background: paragraph.color}}
                            >
                                <h3
                                    className={
                                        "text-white text-xl px-2 pt-2 truncate flex flex-col sm:flex-row sm:items-center gap-2 w-auto "
                                    }
                                >
                                    <Badge
                                        className={
                                            "px-2 text-xs font-semibold w-fit bg-white text-black"
                                        }
                                    >
                                        {paragraph.commission}
                                    </Badge>{" "}
                                    <span className={"truncate sm:w-full max-w-[240px]"}>{paragraph.title}</span>
                                </h3>
                                <span
                                    className={
                                        "px-2 pt-1 text-xs font-semibold text-white truncate w-3/4"
                                    }
                                >
                      {paragraph.teacher}
                    </span>
                            </div>
                        </div>
                        <div className={"h-full flex flex-col justify-between"}>
                            <div>{/*no tocar*/}</div>
                            <div className={"w-full border-t px-5 py-2 flex justify-end"}>
                                <IoIosFolder className={"text-2xl cursor-pointer"}/>
                            </div>
                        </div>
                        <Avatar className={"absolute right-5 top-12 w-16 h-16"}>
                            <AvatarImage/>
                            <AvatarFallback
                                className={"text-white font-bold text-2xl"}
                                style={{background: paragraph.color}}
                            >
                                {paragraph.teacher.charAt(0)}
                            </AvatarFallback>
                        </Avatar>
                    </div>
                </Link>
            ))}
            <div className={" sm:col-span-2 md:col-span-3 pt-10"}>
                <Pagination>
                    <PaginationContent>
                        {currentPage > 1 && (
                            <PaginationPrevious
                                href="#"
                                onClick={() => handleClickPage(currentPage - 1)}
                            />
                        )}
                        {Array.from({length: totalPages}).map((_, index) => (
                            <PaginationItem key={index}>
                                <PaginationLink
                                    href="#"
                                    onClick={() => handleClickPage(index + 1)}
                                >
                                    {index + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                        {currentPage < totalPages && (
                            <PaginationNext
                                href="#"
                                onClick={() => handleClickPage(currentPage + 1)}
                            />
                        )}
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
};

export default Materias;