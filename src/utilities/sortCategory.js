
export default function sortCategory(category) {
    if (category == 'pl') {
        return {
            genre: 'Phim lẻ',
            slugGenre: 'phim-le',
        };
    } else if (category == 'phq') {
        return {
            genre: 'Phim hàn quốc',
            slugGenre: 'phim-han-quoc',
        };
    } else if (category == 'anime') {
        return {
            genre: 'Phim Anime',
            slugGenre: 'phim-anime',
        };
    }
}
