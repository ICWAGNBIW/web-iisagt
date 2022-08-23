const sequelize = require('../db')
const {DataTypes} = require('sequelize')

  //////////////////////////////////////////////////
  //-- SERVETABLES --//

  const Building = sequelize.define('building',{
    id: {type: DataTypes.INTEGER, primaryKey: true},
    adress: {type: DataTypes.STRING, allowNull: false},
    })

  const Auditorium = sequelize.define('auditorium', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    auditorium_number: {type: DataTypes.STRING, allowNull: false},
    floor: {type: DataTypes.INTEGER},
    building: {type: DataTypes.INTEGER, allowNull: false, references: {model: Building, key: 'id'}} 
  })

const Courses = sequelize.define('courses',{
      id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
      title: {type: DataTypes.STRING, allowNull: false, unique: true}
    })



////////////////////////////////////////////////
//-- COMMON --//

const Events = sequelize.define('events', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    text: {type: DataTypes.STRING, allowNull: false},
    cover_path: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT},
    event_date: {type: DataTypes.DATEONLY, allowNull: false},
    auditorium: {type: DataTypes.STRING},
    limit: {type: DataTypes.INTEGER},
    creator: {type: DataTypes.INTEGER}, 
    media_path: {type: DataTypes.STRING}
  })
  
  const News = sequelize.define('news', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    text: {type: DataTypes.STRING, allowNull: false},
    cover_path: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT},
    media_path: {type: DataTypes.STRING}
  })

  const Tags = sequelize.define('tags', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    tag: {type: DataTypes.STRING, allowNull: false, unique: true},
    color: {type: DataTypes.STRING, allowNull: false, unique: true}
  })

  const Stuff = sequelize.define('stuff', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    patronymic: {type: DataTypes.STRING, allowNull: false},
    surname: {type: DataTypes.STRING, allowNull: false},
    position: {type: DataTypes.STRING, allowNull: false}, 
    qualification: {type: DataTypes.STRING, allowNull: false},
    academicDegree: {type: DataTypes.STRING}, 
    academicTitle: {type: DataTypes.STRING}, 
    profExpirience: {type: DataTypes.INTEGER},  
    email: {type: DataTypes.STRING},
    phone: {type: DataTypes.STRING},
    photo_path: {type: DataTypes.STRING}
   })

   const Specialty = sequelize.define('specialty', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    code: {type: DataTypes.INTEGER, allowNull: false},
    mainTitle: {type: DataTypes.STRING, allowNull: false},
    title: {type: DataTypes.STRING, allowNull: false},
    format: {type: DataTypes.STRING, allowNull: false},
    level: {type: DataTypes.STRING, allowNull: false},
    duration: {type: DataTypes.INTEGER, allowNull: false},
    lang: {type: DataTypes.STRING},
    description: {type: DataTypes.TEXT},
    profList: {type: DataTypes.ARRAY(DataTypes.STRING)} 
  })

  const Department = sequelize.define('department', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: false},
    subject: {type: DataTypes.TEXT, allowNull: false},
    headOfDep: {type: DataTypes.INTEGER, allowNull: false, references: {model: Stuff, key: 'id'}},
    headOfUMR: {type: DataTypes.INTEGER, allowNull: false, references: {model: Stuff, key: 'id'}},
    headOfUVR: {type: DataTypes.INTEGER, allowNull: false, references: {model: Stuff, key: 'id'}},
    email: {type: DataTypes.STRING, allowNull: false},
    phone: {type: DataTypes.STRING, allowNull: false},
    adress: {type: DataTypes.INTEGER, allowNull: false, references: {model: Auditorium, key: 'id'}}
  })

  const ScienceLabs = sequelize.define('scienceLabs', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    head: {type: DataTypes.INTEGER, allowNull: false, references: {model: Stuff, key: 'id'}},
    description: {type: DataTypes.TEXT, allowNull: false},
    adress: {type: DataTypes.INTEGER, allowNull: false, references: {model: Building, key: 'id'}}
  })

/////////////////////////////////////////////////////

//-- TIMETABLE --//

const Class_number = sequelize.define('class_name',{
  id: {type: DataTypes.INTEGER, primaryKey: true},
  start_time: {type: DataTypes.DATEONLY, allowNull: false}, 
  end_time: {type: DataTypes.DATEONLY, allowNull: false}, 
})

const Groups = sequelize.define('groups', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  group_number: {type: DataTypes.STRING, allowNull: false}, 
  department: {type: DataTypes.INTEGER, allowNull: false, references: {model: Department, key: 'id'}},
  specialty: {type: DataTypes.INTEGER, allowNull: false, references: {model: Specialty, key: 'id'}},
  level: {type: DataTypes.STRING, allowNull: false},
  ed_year: {type: DataTypes.INTEGER, allowNull: false}, 
})

const Timetable = sequelize.define('timetable', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    start_date: {type: DataTypes.DATEONLY, allowNull: false},
    end_date: {type: DataTypes.DATEONLY, allowNull: false}, 
    class_number: {type: DataTypes.INTEGER, allowNull: false, references: {model: Class_number, key: 'id'}},
    group: {type: DataTypes.INTEGER, allowNull: false, references: {model: Groups, key: 'id'}},
    class_type: {type: DataTypes.ENUM('лекция', 'практика', 'лабораторная работа'), allowNull: false},
    course: {type: DataTypes.INTEGER, allowNull: false, references: {model: Courses, key: 'id'}},
    lecturer: {type: DataTypes.INTEGER, allowNull: false, references: {model: Stuff, key: 'id'}},
    auditorium: {type: DataTypes.INTEGER, allowNull: false, references: {model: Auditorium, key: 'id'}},
    subgroup: {type: DataTypes.INTEGER}, 
    week: {type: DataTypes.STRING, allowNull: false}, 
  })

  //////////////////////////////////////////////////
  //-- MANY TO MANY --//
  const Events_tags = sequelize.define('events_tags', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    event: {type: DataTypes.INTEGER, allowNull: false, references: {model: Events, key: 'id'}},
    tag: {type: DataTypes.INTEGER, allowNull: false, references: {model: Tags, key: 'id'}}
  })


  const News_tags = sequelize.define('news_tags', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    news: {type: DataTypes.INTEGER, allowNull: false, references: {model: News, key: 'id'}},
    tag: {type: DataTypes.INTEGER, allowNull: false, references: {model: Tags, key: 'id'}}
  })

  const Dep_stuff = sequelize.define('dep_stuff', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    dep: {type: DataTypes.INTEGER, allowNull: false, references: {model: Department, key: 'id'}},
    employee: {type: DataTypes.INTEGER, allowNull: false, references: {model: Stuff, key: 'id'}}
  })

  const Dep_specilaty = sequelize.define('dep_specilaty', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    dep: {type: DataTypes.INTEGER, allowNull: false, references: {model: Department, key: 'id'}},
    spec: {type: DataTypes.INTEGER, allowNull: false, references: {model: Specialty, key: 'id'}}
  })

  const Spec_courses = sequelize.define('spec_courses', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    spec: {type: DataTypes.INTEGER, allowNull: false, references: {model: Specialty, key: 'id'}},
    course: {type: DataTypes.INTEGER, allowNull: false, references: {model: Courses, key: 'id'}}
  })

module.exports = {
    Events,
    News,
    Tags,
    Stuff,
    Specialty,
    Department,
    ScienceLabs,
    Timetable,
    Class_number,
    Groups,
    Auditorium,
    Building,
    Courses,
    Events_tags,
    News_tags,
    Dep_specilaty,
    Dep_stuff,
    Spec_courses
  }