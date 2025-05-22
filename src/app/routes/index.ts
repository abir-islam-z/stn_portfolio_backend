import { AuthRoutes } from '@modules/auth/auth.route';
import {CourseRoutes} from "../modules/course/course.route";
import {SubjectRoutes} from "../modules/subject/subject.route";
import {AchievementRoutes} from "../modules/achievement/achievement.route";
import { Router } from 'express';
import { AboutRoutes } from '../modules/about/about.route';
import { BlogRoutes } from '../modules/blog/blog.route';
import { EducationRoutes } from '../modules/education/education.route';
import { ExperienceRoutes } from '../modules/experience/experience.route';
import { ProfileRoutes } from '../modules/profile/profile.route';
import { ProjectRoutes } from '../modules/project/project.route';
import { SkillRoutes } from '../modules/skill/skill.route';
import { Skill_categoryRoutes } from '../modules/skill_category/skill_category.route';

const router = Router();

const moduleRoutes = [
{
path: '/auth',
route: AuthRoutes,
},
{ path: '/profile', route: ProfileRoutes },
{ path: '/project', route: ProjectRoutes },
{ path: '/blog', route: BlogRoutes },
{ path: '/experience', route: ExperienceRoutes },
{ path: '/about', route: AboutRoutes },
{ path: '/skill_category', route: Skill_categoryRoutes },
{ path: '/skill', route: SkillRoutes },
{ path: '/education', route: EducationRoutes },
{ path: "/achievement", route: AchievementRoutes},
{ path: "/subject", route: SubjectRoutes},
{ path: "/course", route: CourseRoutes},
];

moduleRoutes.forEach(route => {
  router.use(route.path, route.route);
});

export default router;
