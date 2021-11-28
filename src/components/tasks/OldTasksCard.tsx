// import { FastForwardIcon, RewindIcon } from "@heroicons/react/solid";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import { are_args_same, isDailyPage } from "../../utils/generalHelpers";
// import {
//   indexDB_doesPageExist,
//   indexDB_getAllPages,
//   indexDB_getPageByPageIndexID,
// } from "../../utils/indexDBHelpers";
// import {
//   type_Page_Story_Todos,
//   Todo,
//   type_user_id,
// } from "../../constants/Types";
// import { useContext, useEffect, useState } from "react";

// import { Card } from "../layout/Card";
// import FireUserContext from "../../contexts/FireUserContext";
// import { IndividualTask } from "./IndividualTask";
// import { Story } from "@prisma/client";
// import dynamic from "next/dynamic";
// import { fetch_createRetDailyPage } from "../../utils/fetchHelpers";
// import { useRouter } from "next/dist/client/router";

// // import { AddTask } from "./AddTask";

// const DynamicAddTask = dynamic(() => import("./AddTask"));

// // ! Limit the number of tasks a user can add to amplify the constraints lead to creativity effect

// export const TasksCard = (): JSX.Element => {
//   const [currentPage, setCurrentPage] = useState<type_Page_Story_Todos>(null);
//   const [currentTodos, setCurrentTodos] = useState<Todo[]>(null);
//   const [addedCounter, setAddedCounter] = useState<number>(0);
//   const [back_date_num, setBack_date_num] = useState<number>(0);
//   const [currentHighlight, setCurrentHighlight] =
//     useState<Todo>(null);
//   const [story, set_story] = useState<Story>(null);
//   const [party_display, set_party_display] = useState(false);

//   const fireId: type_user_id = useContext(FireUserContext);
//   const router = useRouter();

//   // Each time currentPage changes, create a new page in indexedDb if it doesn't exist already and update the page in indexedDb if it does exist
//   // useEffect(() => {
//   //   (async () => {
//   //     if (currentPage?.page_title && currentPage?.page_id) {
//   //       const allPages = await indexDB_getAllPages();

//   //       const doesPageExist = indexDB_doesPageExist({
//   //         all_pages: allPages,
//   //         page_title: currentPage?.page_title,
//   //       });

//   //       if (doesPageExist) {
//   //         await indexDb_updatePageByTitle({
//   //           _id: currentPage?.page_title,
//   //           page_id: currentPage?.page_id,
//   //           page: currentPage,
//   //         });
//   //       } else {
//   //         await indexDB_createPageByTitle({
//   //           _id: currentPage?.page_title,
//   //           page_id: currentPage?.page_id,
//   //           page: currentPage,
//   //         });
//   //       }
//   //     }
//   //   })();
//   // }, [currentPage]);

//   useEffect(() => {
//     console.log("Called");
//     const para_date = router.query?.date?.toString();
//     const today: string = new Date(
//       new Date().setDate(new Date().getDate() - back_date_num)
//     ).toLocaleDateString("en-GB");
//     if (para_date !== today) {
//       router.push(`/app?date=${today}`);
//     }

//     (async () => {
//       const all_indexDb_page = await indexDB_getAllPages();
//       const does_page_exist_in_indexDB = indexDB_doesPageExist({
//         all_pages: all_indexDb_page,
//         page_title: para_date,
//       });

//       if (does_page_exist_in_indexDB) {
//         const { page: page_from_indexDB } = await indexDB_getPageByPageIndexID(
//           para_date && isDailyPage(para_date) ? para_date : today
//         );

//         if (!are_args_same(currentPage, page_from_indexDB)) {
//           setCurrentPage(page_from_indexDB);
//           console.log("From indexedDB");
//         }
//       }

//       const page = await fetch_createRetDailyPage(
//         fireId,
//         para_date && isDailyPage(para_date) ? para_date : today
//       );

//       if (!are_args_same(currentPage, page)) {
//         setCurrentPage(page);
//         console.log("From server");
//       }
//     })();
//   }, [addedCounter, back_date_num, currentPage, fireId, router]);
//   useEffect(() => {
//     const fetchedTodos = currentPage?.Page_Todo;

//     if (JSON.stringify(currentTodos) !== JSON.stringify(fetchedTodos)) {
//       const noHighlight = fetchedTodos?.filter(
//         (todo: Todo) => todo.todo_highlight === false
//       );

//       setCurrentTodos(noHighlight);
//     }

//     const highlightTask = fetchedTodos?.filter(
//       (todo: Todo) => todo?.todo_highlight === true
//     );

//     if (highlightTask) {
//       setCurrentHighlight(highlightTask[0]);
//     } else {
//       setCurrentHighlight(null);
//     }
//   }, [currentPage?.Page_Todo, currentTodos, setCurrentHighlight]);

//   useEffect(() => {
//     if (JSON.stringify(story) !== JSON.stringify(currentPage?.Page_Story)) {
//       set_story(currentPage?.Page_Story);
//     }
//   }, [addedCounter, currentTodos, currentPage, story]);

//   const stateReload = (): void => {
//     if (addedCounter < 50) {
//       setAddedCounter(addedCounter + 1);
//     } else {
//       setAddedCounter(0);
//     }
//   };

//   useEffect(() => {
//     setTimeout(() => {
//       set_party_display(false);
//     }, 5000);
//   }, [party_display]);

//   return (
//     <Card
//       action_component={
//         <DynamicAddTask
//           user={fireId}
//           page={currentPage?.page_id}
//           count={currentTodos?.length}
//           highlight={currentHighlight}
//           stateReload={stateReload}
//         />
//       }
//       spaced_elements={
//         <>
//           {currentHighlight && story && (
//             <>
//               <IndividualTask
//                 today={new Date().toLocaleDateString("en-GB")}
//                 user_id={fireId}
//                 todo={currentHighlight}
//                 highlight={true}
//                 story={story}
//                 set_party_display={set_party_display}
//                 stateReload={stateReload}
//                 highlightCount={1}
//               />

//               {party_display && <p>Wohoo you completed your highlight!🎉</p>}
//             </>
//           )}

//           {currentTodos && story ? (
//             currentTodos?.map((todo: Todo) => (
//               <>
//                 <IndividualTask
//                   today={new Date().toLocaleDateString("en-GB")}
//                   user_id={fireId}
//                   todo={todo}
//                   story={story}
//                   key={todo.todo_id}
//                   stateReload={stateReload}
//                   highlightCount={currentHighlight ? 1 : 0}
//                 />
//               </>
//             ))
//           ) : (
//             <SkeletonTheme color="#0F172A" highlightColor="#1E293B">
//               <Skeleton count={10} height={20} />
//             </SkeletonTheme>
//           )}
//         </>
//       }
//       title={
//         currentPage?.page_title ||
//         new Date(
//           new Date().setDate(new Date().getDate() - back_date_num)
//         ).toLocaleDateString("en-GB")
//       }
//       buttons={
//         <>
//           <button
//             aria-label="Go to previous date page"
//             onClick={() => setBack_date_num(back_date_num + 1)}
//           >
//             <RewindIcon className="w-6 h-6" />
//           </button>

//           <button
//             aria-label="Go to next date page"
//             onClick={() => setBack_date_num(back_date_num - 1)}
//           >
//             <FastForwardIcon className="w-6 h-6" />
//           </button>
//         </>
//       }
//     />
//   );
// };
export {};