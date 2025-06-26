import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { clearAllSkillErrors } from "@/store/slices/skillSlice";
import {
  clearAllSoftwareAppErrors,
  deleteSoftwareApplication,
  getAllSoftwareApplications,
  resetSoftwareApplicationSlice,
} from "@/store/slices/softwareApplicationSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SpecialLoadingButton from "./SpecialLoadingButton";
import { clearAllTimelineErrors } from "@/store/slices/timelineSlice";
import { clearAllProjectErrors } from "@/store/slices/projectSlice";
const Dashboard = () => {
  const navigateTo = useNavigate();
  const gotoMangeSkills = () => {
    navigateTo("/manage/skills");
  };
  const gotoMangeTimeline = () => {
    navigateTo("/manage/timeline");
  };
  const gotoMangeProjects = () => {
    navigateTo("/manage/projects");
  };

  const { user } = useSelector((state) => state.user);
  const {
    skills,
    loading: skillLoading,
    error: skillError,
    message: skillMessage,
  } = useSelector((state) => state.skill);
  const {
    softwareApplications,
    loading: appLoading,
    error: appError,
    message: appMessage,
  } = useSelector((state) => state.softwareApplications);
  const {
    timeline,
    loading: timelineLoading,
    error: timelineError,
    message: timelineMessage,
  } = useSelector((state) => state.timeline);
  const { projects, error: projectError } = useSelector(
    (state) => state.project
  );

  const [appId, setAppId] = useState(null);
  const handleDeleteSoftwareApp = (id) => {
    setAppId(id);
    dispatch(deleteSoftwareApplication(id));
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (skillError) {
      toast.error(skillError);
      dispatch(clearAllSkillErrors());
    }
    if (appError) {
      toast.error(appError);
      dispatch(clearAllSoftwareAppErrors());
    }
    if (projectError) {
      toast.error(projectError);
      dispatch(clearAllProjectErrors());
    }
    if (appMessage) {
      toast.success(appMessage);
      setAppId(null);
      dispatch(resetSoftwareApplicationSlice());
      dispatch(getAllSoftwareApplications());
    }
    if (timelineError) {
      toast.error(timelineError);
      dispatch(clearAllTimelineErrors());
    }
  }, [
    dispatch,
    skillLoading,
    skillError,
    skillMessage,
    appLoading,
    appError,
    appMessage,
    timelineError,
    timelineLoading,
    timelineMessage,
  ]);

  return (
    <>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-16">
        <main className="grid flex-1 items-start gap-6 p-6 sm:px-8 sm:py-6 md:gap-8 lg:grid-cols-2 xl:grid-cols-2">
          <div className="grid auto-rows-max items-start gap-6 md:gap-8 lg:col-span-2">
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              <Card className="sm:col-span-2 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 border-0 shadow-lg">
                <CardHeader className="pb-3">
                  <CardDescription className="max-w-lg text-balance leading-relaxed text-slate-700 dark:text-slate-300">
                    {user.aboutMe}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg transition-all duration-300 hover:scale-105">
                    Visit Portfolio
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="flex flex-col justify-center bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-green-700 dark:text-green-300">Projects Completed</CardTitle>
                  <CardTitle className="text-6xl font-bold text-green-600 dark:text-green-400">
                    {projects && projects.length}
                  </CardTitle>
                </CardHeader>
                <CardFooter>
                  <Button onClick={gotoMangeProjects} className="bg-green-600 hover:bg-green-700 text-white shadow-lg transition-all duration-300 hover:scale-105">
                    Manage Projects
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="flex flex-col justify-center bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-purple-700 dark:text-purple-300">Skills</CardTitle>
                  <CardTitle className="text-6xl font-bold text-purple-600 dark:text-purple-400">
                    {skills && skills.length}
                  </CardTitle>
                </CardHeader>
                <CardFooter>
                  <Button onClick={gotoMangeSkills} className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg transition-all duration-300 hover:scale-105">
                    Manage Skills
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <Tabs>
              <TabsContent>
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader className="px-7 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 rounded-t-lg">
                    <CardTitle className="text-blue-700 dark:text-blue-300">Projects</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-slate-50 dark:bg-slate-800">
                          <TableHead className="font-semibold">Title</TableHead>
                          <TableHead className="hidden md:table-cell font-semibold">Stack</TableHead>
                          <TableHead className="hidden md:table-cell font-semibold">Deployed</TableHead>
                          <TableHead className="md:table-cell font-semibold">Update</TableHead>
                          <TableHead className="text-right font-semibold">Visit</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {projects && projects.length > 0 ? (
                          projects.map((element) => {
                            return (
                              <TableRow className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" key={element._id}>
                                <TableCell>
                                  <div className="font-medium text-slate-900 dark:text-slate-100">
                                    {element.title}
                                  </div>
                                </TableCell>
                                <TableCell className="hidden md:table-cell text-slate-600 dark:text-slate-400">
                                  {element.stack}
                                </TableCell>
                                <TableCell className="hidden md:table-cell">
                                  <Badge
                                    className="text-xs bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                                    variant="secondary"
                                  >
                                    {element.deployed}
                                  </Badge>
                                </TableCell>
                                <TableCell className="md:table-cell">
                                  <Link to={`/update/project/${element._id}`}>
                                    <Button className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 transition-all duration-300 hover:scale-105">
                                      Update
                                    </Button>
                                  </Link>
                                </TableCell>
                                <TableCell className="text-right">
                                  <Link
                                    to={element.projectLink}
                                    target="_blank"
                                  >
                                    <Button className="bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-1 transition-all duration-300 hover:scale-105">
                                      Visit
                                    </Button>
                                  </Link>
                                </TableCell>
                              </TableRow>
                            );
                          })
                        ) : (
                          <TableRow>
                            <TableCell colSpan={5} className="text-center py-8">
                              <div className="text-slate-500 dark:text-slate-400 text-lg">
                                You have not added any project yet.
                              </div>
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <Tabs>
              <TabsContent>
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader className="px-7 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 rounded-t-lg">
                    <CardTitle className="text-purple-700 dark:text-purple-300">Skills</CardTitle>
                  </CardHeader>
                  <CardContent className="grid sm:grid-cols-2 gap-4 p-6">
                    {skills && skills.length > 0 ? (
                      skills.map((element) => {
                        return (
                          <Card key={element._id} className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-0 shadow-md hover:shadow-lg transition-all duration-300">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg text-purple-700 dark:text-purple-300">{element.title}</CardTitle>
                            </CardHeader>
                            <CardFooter className="pt-0">
                              <div className="w-full">
                                <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400 mb-1">
                                  <span>Proficiency</span>
                                  <span>{element.proficiency}%</span>
                                </div>
                                <Progress value={element.proficiency} className="h-2 bg-slate-200 dark:bg-slate-700" />
                              </div>
                            </CardFooter>
                          </Card>
                        );
                      })
                    ) : (
                      <div className="col-span-2 text-center py-8">
                        <div className="text-slate-500 dark:text-slate-400 text-lg">
                          You have not added any skill yet.
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <Tabs>
              <TabsContent className="grid min-[1050px]:grid-cols-2 gap-6">
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader className="px-7 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/50 dark:to-red-950/50 rounded-t-lg">
                    <CardTitle className="text-orange-700 dark:text-orange-300">Software Applications</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-slate-50 dark:bg-slate-800">
                          <TableHead className="font-semibold">Name</TableHead>
                          <TableHead className="md:table-cell font-semibold">Icon</TableHead>
                          <TableHead className="md:table-cell text-center font-semibold">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {softwareApplications && softwareApplications.length > 0 ? (
                          softwareApplications.map((element) => {
                            return (
                              <TableRow className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" key={element._id}>
                                <TableCell className="font-medium text-slate-900 dark:text-slate-100">
                                  {element.name}
                                </TableCell>
                                <TableCell className="md:table-cell">
                                  <img
                                    className="w-8 h-8 rounded-lg shadow-sm"
                                    src={element.svg && element.svg.url}
                                    alt={element.name}
                                  />
                                </TableCell>
                                <TableCell className="md:table-cell text-center">
                                  {appLoading && appId === element._id ? (
                                    <SpecialLoadingButton
                                      content={"Deleting"}
                                      width={"w-fit"}
                                    />
                                  ) : (
                                    <Button
                                      onClick={() => handleDeleteSoftwareApp(element._id)}
                                      className="bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1 transition-all duration-300 hover:scale-105"
                                    >
                                      Delete
                                    </Button>
                                  )}
                                </TableCell>
                              </TableRow>
                            );
                          })
                        ) : (
                          <TableRow>
                            <TableCell colSpan={3} className="text-center py-8">
                              <div className="text-slate-500 dark:text-slate-400 text-lg">
                                You have not added any software application yet.
                              </div>
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader className="px-7 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/50 dark:to-cyan-950/50 rounded-t-lg flex items-center justify-between flex-row">
                    <CardTitle className="text-teal-700 dark:text-teal-300">Timeline</CardTitle>
                    <Button onClick={gotoMangeTimeline} className="w-fit bg-teal-600 hover:bg-teal-700 text-white shadow-lg transition-all duration-300 hover:scale-105">
                      Manage Timeline
                    </Button>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-slate-50 dark:bg-slate-800">
                          <TableHead className="font-semibold">Title</TableHead>
                          <TableHead className="md:table-cell font-semibold">From</TableHead>
                          <TableHead className="md:table-cell text-right font-semibold">To</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {timeline && timeline.length > 0 ? (
                          timeline.map((element) => {
                            return (
                              <TableRow className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" key={element._id}>
                                <TableCell className="font-medium text-slate-900 dark:text-slate-100">
                                  {element.title}
                                </TableCell>
                                <TableCell className="md:table-cell text-slate-600 dark:text-slate-400">
                                  {element.timeline.from}
                                </TableCell>
                                <TableCell className="md:table-cell text-right text-slate-600 dark:text-slate-400">
                                  {element.timeline.to}
                                </TableCell>
                              </TableRow>
                            );
                          })
                        ) : (
                          <TableRow>
                            <TableCell colSpan={3} className="text-center py-8">
                              <div className="text-slate-500 dark:text-slate-400 text-lg">
                                You have not added any timeline yet.
                              </div>
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
