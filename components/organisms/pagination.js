import React from "react";
import classnames from "classnames";
import { usePagination, DOTS } from "@/utils";
import { IconButton, Icon } from "@chakra-ui/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// import "./pagination.scss";
const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames("pagination-container flex gap-4 items-center", {
        [className]: className,
      })}
    >
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === 1,
        })}
      >
        <IconButton
          onClick={onPrevious}
          icon={<Icon as={FaAngleLeft} boxSize={9} color="#FFCD61" />}
          variant="unstyled"
          disabled={currentPage <= 1 ? true : false}
        />
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li
              key={index}
              className="pagination-item dots text-xl font-semibold"
            >
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={index}
            className={classnames(
              `pagination-item px-3 py-1 rounded-lg text-xl font-semibold ${
                pageNumber === currentPage
                  ? "bg-storm-grey text-white"
                  : "text-independence-black"
              }`,
              {
                selected: pageNumber === currentPage,
              }
            )}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === lastPage,
        })}
      >
        <IconButton
          onClick={onNext}
          icon={<Icon as={FaAngleRight} color="#FFCD61" boxSize={9} />}
          variant="unstyled"
          disabled={currentPage >= lastPage ? true : false}
        />
      </li>
    </ul>
  );
};

export default Pagination;
