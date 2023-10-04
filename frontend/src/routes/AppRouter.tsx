import { About, Article, ArticleList, Home, NotFound } from '../pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const AppRouter = () => {
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/articles" element={<ArticleList/>}/>
        <Route path="/articles/:slug" element={<Article/>}/>
        <Route path="/not-found" element={<NotFound/>}/>
        <Route path="*" element={<Home/>}/>
        </Routes>
        </BrowserRouter>
    )
    }