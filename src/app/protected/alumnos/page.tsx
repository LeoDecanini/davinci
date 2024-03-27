"use client";
import React, { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {toast} from "sonner";
import axios from "axios";

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);
  const [usersTable, setUsersTable] = useState<any>([]);
  const [edit, setEdit] = useState<boolean>(false);
  const [editedItem, setEditedItem] = useState<any>(null);
  const [role, setRole] = useState<any>("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = usersTable.filter((user: any) => {
    return Object.values(user).some((value) =>
        typeof value === "string" && value.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

  const handleSearchChange = (e: any) => {
    setSearchTerm(e.target.value);
    console.log("Search term:", e.target.value);
  };

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedItem((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const toggleEdit = async (item: any) => {
    if (edit) {
      setEdit(false);
      try {
        const updatedItem = { ...editedItem, role };
        const response = await axios.put(`/api/users/${item._id}`, updatedItem, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.status !== 200) {
          throw new Error("Error al enviar cambios al servidor");
        }
        if (response.data.message === "success") {
          window.location.reload();
        }
      } catch (error) {
        console.error("Error al enviar cambios al servidor:", error);
      }
    } else {
      setEdit(true);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsersTable(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <section
      className={
        "w-full h-full min-h-[calc(100svh-86px)] mt-[60px] flex justify-center"
      }
    >
      <div className="max-w-screen-2xl w-full flex items-center flex-col">
        <section className={"w-full h-full p-2"}>
          <div className={" border h-full rounded-md"}>
            <div
              className={
                "flex w-full justify-between items-center p-2 border-b"
              }
            >
              <div className="w-full md:w-1/3">
                <div className="flex items-center">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      className="border text-sm rounded-lg block w-full pl-10 p-2"
                      placeholder="Search"
                      value={searchTerm}
                      onChange={handleSearchChange}
                    />
                  </div>
                </div>
              </div>
              <div className={"flex items-center gap-3"}>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Orden" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Orden alfabetico</SelectItem>
                    <SelectItem value="dark">rol</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className={"w-full flex flex-col justify-between"}>
              <div className="w-full">
                <div className={"w-full h-full"}>
                  <div className={"w-full bg-gray-50 p-2 pr-[23px]"}>
                    <div className={"w-full flex gap-3 justify-between px-2"}>
                      <span className="text-left w-full">Nombre</span>
                      <span className="text-left w-full">Curso</span>
                      <span className="text-left w-full">DNI</span>
                      <span className="text-left w-full">Email</span>
                      <span className="text-left w-full">Telefonos</span>
                      <span className="text-left w-full">Direccion</span>
                      <span className="text-left w-full">Rol</span>
                      <span className="text-left w-full">Acciones</span>
                    </div>
                  </div>
                  <div
                    className={"overflow-y-scroll h-[calc(100svh-232px)] p-0"}
                  >
                    {currentItems.map((item: any, index: any) => (
                      <div
                        key={index}
                        className="w-full flex gap-3 justify-between pl-4 border-b border-t"
                      >
                        <ResizablePanelGroup direction="horizontal">
                          <ResizablePanel className="text-left flex items-center w-full truncate pr-2 py-3">
                            {!edit ? (
                              `${item.name} ${item.lastname}`
                            ) : (
                              <Input
                                type="text"
                                placeholder={"Nombre completo"}
                                value={`${item.name} ${item.lastname}`}
                                className={"w-full"}
                                onChange={handleInputChange}
                                name="name"
                              />
                            )}
                          </ResizablePanel>
                          <ResizableHandle />
                          <ResizablePanel className="text-left flex items-center w-full truncate border-l px-2 py-3">
                            {!edit ? (
                              `${item.course}`
                            ) : (
                              <Input
                                type="text"
                                placeholder={"Curso"}
                                defaultValue={item.course}
                                className={"w-full"}
                                onChange={handleInputChange}
                                name="course"
                              />
                            )}
                          </ResizablePanel>
                          <ResizableHandle />
                          <ResizablePanel className="text-left flex items-center w-full truncate border-l px-2 py-3">
                            {!edit ? (
                              `${item.dni}`
                            ) : (
                              <Input
                                type="text"
                                placeholder={"DNI"}
                                defaultValue={item.dni}
                                className={"w-full"}
                                onChange={handleInputChange}
                                name="dni"
                              />
                            )}
                          </ResizablePanel>
                          <ResizableHandle />
                          <ResizablePanel className="text-left flex items-center w-full truncate border-l px-2 py-3">
                            {!edit ? (
                              `${item.email}`
                            ) : (
                              <Input
                                type="text"
                                placeholder={"Email"}
                                defaultValue={item.email}
                                className={"w-full"}
                                onChange={handleInputChange}
                                name="email"
                              />
                            )}
                          </ResizablePanel>
                          <ResizableHandle />
                          <ResizablePanel className="text-left flex items-center w-full truncate border-l px-2 py-3">
                            {!edit ? (
                              `${item.tel}`
                            ) : (
                              <Input
                                type="text"
                                placeholder={"Telefono"}
                                defaultValue={item.tel}
                                className={"w-full"}
                                onChange={handleInputChange}
                                name="tel"
                              />
                            )}
                          </ResizablePanel>
                          <ResizableHandle />
                          <ResizablePanel className="text-left flex items-center w-full truncate border-l px-2 py-3">
                            {!edit ? (
                              `${item.direction}`
                            ) : (
                              <Input
                                type="text"
                                placeholder={"Direccion"}
                                defaultValue={item.direction}
                                className={"w-full"}
                                onChange={handleInputChange}
                                name="direction"
                              />
                            )}
                          </ResizablePanel>
                          <ResizablePanel className="text-left flex items-center w-full truncate border-l px-2 py-3">
                            {!edit ? (
                              `${item.role}`
                            ) : (
                              <Select onValueChange={(e) => setRole(e)}>
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder={item.role} />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="alumno">alumno</SelectItem>
                                  <SelectItem value="profesor">
                                    profesor
                                  </SelectItem>
                                  <SelectItem value="secretario">
                                    secretario
                                  </SelectItem>
                                  <SelectItem value="administrador">
                                    administrador
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            )}
                          </ResizablePanel>
                          <ResizableHandle />
                          <ResizablePanel className="text-left flex gap-3 justify-between items-center w-full truncate border-l px-2 py-3">
                            <Button
                              className={"w-full"}
                              variant={"outline"}
                              onClick={() => {
                                toggleEdit(item);
                              }}
                            >
                              {!edit ? <MdEdit /> : <FaSave />}
                            </Button>
                            <Button className={"w-full"} variant={"outline"}>
                              <MdDelete />
                            </Button>
                          </ResizablePanel>
                        </ResizablePanelGroup>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className={
                  "min-h-14 border-t flex items-center justify-between px-4"
                }
              >
                <p>
                  página <span className={"font-semibold"}>{currentPage}</span>{" "}
                  de
                  <span className={"font-semibold pl-1"}>
                    {Math.ceil(usersTable.length / itemsPerPage)}
                  </span>
                </p>
                <div>
                  <Pagination>
                    <PaginationContent>
                      {currentPage > 1 && (
                        <PaginationItem>
                          <PaginationPrevious
                            onClick={() => paginate(currentPage - 1)}
                          />
                        </PaginationItem>
                      )}
                      {Array.from({
                        length: Math.ceil(usersTable.length / itemsPerPage),
                      }).map((_, index) => (
                        <PaginationItem key={index}>
                          <PaginationLink onClick={() => paginate(index + 1)}>
                            {index + 1}
                          </PaginationLink>
                        </PaginationItem>
                      ))}
                      {currentPage <
                        Math.ceil(usersTable.length / itemsPerPage) && (
                        <PaginationItem>
                          <PaginationNext
                            onClick={() => paginate(currentPage + 1)}
                          />
                        </PaginationItem>
                      )}
                    </PaginationContent>
                  </Pagination>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Page;
